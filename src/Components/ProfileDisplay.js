import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import PlaylistBar from './PlaylistBar'
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
    }
  }

  componentWillMount = () => {
    this.setState({currentUser: this.props.navigation.getParam('viewUser')})
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
    this.props.navigation.navigate('Contact')
  }
  navHome= () => {
    this.props.navigation.navigate('Home')
  }
 
  contactUser = (user) => {
    this.props.navigation.navigate('Contact', {chatUser: user})
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
          />

          <ScrollView style={styles.userCardScroll}>
            <UserCard
              user={this.state.currentUser}
            />
          
          </ScrollView>
        
        <PlaylistBar //conditional bars
          user={this.state.currentUser}
          judgeUser={this.judgeUser}
          nextUser={this.nextUser}
          contactUser={this.contactUser}
          navPlaylist={this.navPlaylist}
        />
      
    
        </View>
      </ImageBackground>
    )//return
  }//render


}
