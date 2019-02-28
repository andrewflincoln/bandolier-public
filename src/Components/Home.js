import React from 'react'
import {Text, View, ImageBackground, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'
import UserCard from './UserCard'
import PlayBar from './PlayBar'
import NavBar from './NavBar'

import {Audio} from 'expo'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 0,   
      currentUser: {},
      recents: [99],
      playing: false

    }
  }

  componentWillMount = async () => { //sync issues here?
    this.setState({userId: this.props.navigation.getParam('userId')})
   
  }
  componentDidMount = () => {
    this.nextUser()
  }


  nextUser = () =>  { //find next user to show while browsing
    axios.post(`${BASE_URL}/users/next`, {userId: this.state.userId, recents: this.state.recents})
    .then(response => {
        this.setState({currentUser: response.data})
        this.setState({ recents: [...this.state.recents, response.data.id] }) //track recents to avoid repeats
        if (this.state.recents.length >= 8) {
          const newRecents = [...this.state.recents]
          newRecents.shift()
          this.setState({ recents: newRecents })
        }
    })
    .then( () =>  { 
        this.state.currentUser.url ? this.playUser(this.state.currentUser.url) 
        : this.playUser(`https://s3-us-west-2.amazonaws.com/bandolier-tracks/elevator2.mp3`) //elevator music if no track
     } )
    .catch(() => console.log('failed to get next user') )
  }

  judgeUser = (judgedId, status) => {
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: judgedId, status: status})
    .then(this.stopUserSound() ) //these used to be together on a line (nextUser first)
    .then(this.nextUser())
    .catch(() => console.log('failed to play user'))
  }

  navGen = (toScreen) => {
    this.stopUserSound()
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
    
  }

  playUser = async (url) => {
    if(this.state.playing) this.stopUserSound()
    this.state.userSound = new Audio.Sound();
      
    await this.state.userSound.loadAsync({uri: url})
    .then( () => this.state.userSound.playAsync() )
    .then(this.setState({playing: true})    ) 
    .catch (error => console.log('play user error: ', error) )   
  }
  
  stopUserSound = async () => {
   await this.state.userSound.unloadAsync()
   this.setState({playing:false})
  }


  render() {
    const {navigate} = this.props.navigation
    return (

      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>

        <View style={styles.profileBG}>
          <NavBar
            navGen={this.navGen}
            userId={this.state.userId}
            from='home'
          />
    
              {/* card or empty message */}
            {/* {this.state.currentUser.username ?  */}
            <ScrollView style={styles.userCardScroll}>
              <UserCard
                user={this.state.currentUser}
              />
            
            </ScrollView>

            {/* // :
            // <Text style={styles.emptyMsg}>Looks like you ran out of users and still don't have a band. You can have your money back.</Text>
            // } */}
     
        <PlayBar
          user={this.state.currentUser}
          judgeUser={this.judgeUser}
          nextUser={this.nextUser}
          stopUserSound={this.stopUserSound}
        />

        </View>
      </ImageBackground>
    )//return
  }//render


}



