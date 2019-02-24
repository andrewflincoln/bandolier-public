import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import PlaylistBar from './PlaylistBar'
import SearchedBar from './SearchedBar'
import NavBar from './NavBar'
import UserCard from './UserCard'
import attachHeader from './Home'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`


export default class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 0,   //'',
      viewId: 0,
      currentUser: {},
      barType: ''
      
    }
  }

  componentWillMount = () => {
    this.setState({userId: this.props.navigation.getParam('userId')})
  }
  componentDidMount = () => {
    this.setUser()
    this.props.navigation.addListener('willFocus', this.setUser)
   
  }

  setUser = () => {
    this.setState({currentUser: this.props.navigation.getParam('viewUser'), barType: this.props.navigation.getParam('barType')})
  }

  getUser = () =>  { 
    axios.get(`${BASE_URL}/users/${this.state.viewId}`, attachHeader()) 
    .then(response => {
        // console.log(JSON.stringify(response))
        this.setState({currentUser: response.data[0]})
    })
    .catch(() => console.log('failed to get user'))
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }

  contactUser = (chatterId) => {
    // this.navGen('Contact', {chatUser: user})
    this.props.navigation.navigate('Contact', {chatUser: chatterId, userId: this.state.userId})
  }

  addToPlaylist= (user) => { //2 function here could be one, depending how much gets added
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'played'}, attachHeader())
    .catch(() => console.log('failed to play user'))
    .then(() => {
      this.state.barType === 'search' ?  this.navGen('SearchPage')
      : this.navGen('Playlist')
    })
  }

  stopUser = (user) => {
    this.unList(user)
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'stopped'}, attachHeader())
    .catch(() => console.log('failed to stop user'))
    .then(() => {
      this.state.barType === 'search' ?  this.navGen('SearchPage')
      : this.navGen('Playlist')
    })
  }

  unList = (user2) => {
    console.log(this.state.userId, user2)
    axios.post(`${BASE_URL}/relations/alter`, {user_1: this.state.userId, user_2: user2})
    .then(this.navGen('Playlist'))
  }
 


  render() {

console.log('userid on profile display: ', this.state.userId)
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
        
        {

        this.state.barType === 'playlist' ? 
        <PlaylistBar //conditional bars
        setUser={this.setUser}
          user={this.state.currentUser}
          unList={this.unList}
          stopUser={this.stopUser}
          contactUser={this.contactUser}
          navGen={this.navGen}
        
        />
        : 
        <SearchedBar 
        setUser={this.setUser}
          navGen={this.navGen}
          user={this.state.currentUser}
          stopUser={this.stopUser}
          addToPlaylist={this.addToPlaylist}
          contactUser={this.contactUser}
          navSearch={this.navSearch}
          unList={this.unList}
        />

        }
      
    
        </View>
      </ImageBackground>
    )//return
  }//render


}
