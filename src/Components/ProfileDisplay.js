import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import PlaylistBar from './PlaylistBar'
import SearchedBar from './SearchedBar'
import NavBar from './NavBar'
import UserCard from './UserCard'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`


export default class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 2,   //'',
      viewId: 1,
      currentUser: {},
      barType: ''
      
    }
  }

  componentDidMount = () => {
    this.setUser()
    this.props.navigation.addListener('willFocus', this.setUser)
  }

  setUser = () => {
    this.setState({currentUser: this.props.navigation.getParam('viewUser'), barType: this.props.navigation.getParam('barType')})
    
  }

  getUser = () =>  { 
    axios.get(`${BASE_URL}/users/${this.state.viewId}`) //might be props
    .then(response => {
        // console.log(JSON.stringify(response))
        this.setState({currentUser: response.data[0]})
    })
    .catch(() => console.log('failed to get user'))
  }

  navPlaylist = () => {
    this.props.navigation.navigate('Playlist')
  }
  navQuestions = () => {
    this.props.navigation.navigate('Questions')
  }
  navCreate = () => {
    this.props.navigation.navigate('Create')
  }
  navSearch= () => {
    this.props.navigation.navigate('SearchPage')
  }
  navContact= () => {
    this.props.navigation.navigate('Contact', {userId: this.state.userId})
  }
  navHome= () => {
    this.props.navigation.navigate('Home')
  }
 
  contactUser = (user) => {
    this.props.navigation.navigate('Contact', {chatUser: user, userId: this.state.userId})
  }
  addToPlaylist= (user, status) => { //2 function here could be one, depending how much gets added
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'played'})
    .catch(() => console.log('failed to play user'))
  }
  stopUser = (user, status) => {
    this.unList(user)
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: user, status: 'stopped'})
    .catch(() => console.log('failed to stop user'))
    .then(() => {
      this.state.barType === 'search' ? this.navSearch()
      : this.navPlaylist()
    })
  }
  unList = (user2) => {
    console.log(this.state.userId, user2)
    axios.post(`${BASE_URL}/relations/alter`, {user_1: this.state.userId, user_2: user2})
    .then(this.navPlaylist())
    .catch(() => console.log('failed to remove user'))
  }
 

  render() {


    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require(`../guitars/fender_amp_grill.jpg`)} style={styles.imgBG}>
        <View style={styles.profileBG}>
          <NavBar
            userId={this.state.userId}
            navPlaylist={this.navPlaylist}
            navQuestions={this.navQuestions}
            navCreate={this.navCreate}
            navSearch={this.navSearch}
            navContact={this.navContact}
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
          navPlaylist={this.navPlaylist}
        
        />
        : 
        <SearchedBar 
        setUser={this.setUser}
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
