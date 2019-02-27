import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import PlaylistBar from './PlaylistBar'
import SearchedBar from './SearchedBar'
import NavBar from './NavBar'
import UserCard from './UserCard'

import {Audio, Font} from 'expo'
import IconF from 'react-native-vector-icons/FontAwesome'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`


export default class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 0,  
      currentUser: {},
      barType: '',
      playing: false,
      fontLoaded: false
      
    }
  }

  componentWillMount = async () => {
    this.setState({userId: this.props.navigation.getParam('userId')}) //passing user id
    await Font.loadAsync({
      'belair': require('../../assets/fonts/Belair-Regular.otf')
    })
    this.setState({fontLoaded: true})
  }
  componentDidMount = () => {
    this.getUser(this.props.navigation.getParam('viewUserId'))
    this.props.navigation.addListener('willFocus', () => this.getUser(this.props.navigation.getParam('viewUserId')) )
  }

  getUser = (id) =>  { 
    axios.get(`${BASE_URL}/users/${this.state.userId}/${id}`) 
    .then(response => {
        this.setState({currentUser: response.data, barType: this.props.navigation.getParam('barType')})//data vs data.rows[0] issues
    })
    .catch(() => console.log('failed to get user'))
  }

  playUserSound = async (url) => {
    this.state.profileSound = new Audio.Sound();
      
    await this.state.profileSound.loadAsync({uri: url})

    .then( () => this.state.profileSound.playAsync() )
    .catch (error => console.log('play user error: ', error) )

    this.setState({playing: true})
  }

  stopUserSound = async () => {
    await this.state.profileSound.unloadAsync()
    this.setState({playing: false})
   }
 

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
    this.setState({ currentUser: {} })
    if (this.state.playing)
      this.stopUserSound()
  }
  
  contactUser = (chatterId) => {
    this.props.navigation.navigate('Contact', {chatUser: chatterId, userId: this.state.userId})
    if (this.state.playing)
      this.stopUserSound()
  }

  addToPlaylist= (user) => { //2 functions here could be one, depending how much gets added
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'played'})
    .catch(() => console.log('failed to play user'))
    .then(() => {
      this.state.barType === 'search' ?  this.navGen('SearchPage')
      : this.navGen('Playlist')
    })
  }

  stopUser = (user) => {
    this.unList(user)
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'stopped'})
    .catch(() => console.log('failed to stop user'))
    .then(() => {
      this.state.barType === 'search' ?  this.navGen('SearchPage')
      : this.navGen('Playlist')
    })
    
  }

  unList = (user2) => {
    axios.post(`${BASE_URL}/relations/alter`, {user_1: this.state.userId, user_2: user2})
    .then(this.props.navigation.getParam('getPlaylist'))
    .then(this.navGen('Playlist'))
  }
 


  render() {
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require(`../guitars/fender_amp_grill.jpg`)} style={styles.imgBG}>
        <View style={styles.profileBG}>
          <NavBar
            userId={this.state.userId}
            navGen={this.navGen}
            setUser = {this.setUser}
          />

          <ScrollView style={styles.userCardScroll}>
            <UserCard
              user={this.state.currentUser}
            />
          
          </ScrollView>



        {!this.state.currentUser.title ? 
        <View style={styles.bottomLine}>
        <Text style={{ fontFamily: 'belair', color: 'white', fontSize: 25}}> {this.state.currentUser.username} has no songs.</Text>
        </View>

        :

        <View style={styles.bottomLine}>
          {
            !this.state.playing ? 
              <TouchableOpacity onPress={() => this.playUserSound(this.state.currentUser.url)}>
                {this.state.fontLoaded ? <Text style={{ fontFamily: 'belair', color: 'white', fontSize: 25}}>Hear "{this.state.currentUser.title}"  <IconF name='play' color='white' size={17}/></Text>
                                      
               :null}
              </TouchableOpacity>
              
              :
              <TouchableOpacity onPress = {() => this.stopUserSound()} >
                {this.state.fontLoaded ? <Text style={{ fontFamily: 'belair', color: 'white', fontSize: 25}}>Stop  <IconF name='stop' color='white' size={17}/></Text>
                :null}
              </TouchableOpacity>
            }
        </View>
        }





        {

        this.state.barType === 'playlist' ? 
        <PlaylistBar //conditional bars
          setUser={this.setUser}
          navGen={this.navGen}
          user={this.state.currentUser}
          unList={this.unList}
          stopUser={this.stopUser}
          contactUser={this.contactUser}
        
        
        />
        : 
        <SearchedBar 
          setUser={this.setUser}
          navGen={this.navGen}
          user={this.state.currentUser}
          stopUser={this.stopUser}
          addToPlaylist={this.addToPlaylist}
          contactUser={this.contactUser}
          unList={this.unList}
        />

        }
      
    
        </View>
      </ImageBackground>
    )//return
  }//render


}
