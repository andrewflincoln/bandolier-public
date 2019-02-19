import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import UserCard from './UserCard'
import PlayBar from './PlayBar'
import NavBar from './NavBar'

import {Audio} from 'expo'

// autolux `https://dl.dropboxusercontent.com/s/r8soza05f4cpe62/Autolux-Turnstile%20Blues.mp3?dl=0`
// vivian girls video `https://dl.dropboxusercontent.com/s/pzccaq35w4yknwi/vivian_girls_allthetime.mp4?dl=0`
const BASE_URL = `https://quiet-garden-92157.herokuapp.com`


export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 2,   //'',
      currentUser: {},
      recents: []
    }
  }

  componentWillMount = () => {

    this.nextUser()
  }
  // componentDidMount = () => {

  // }


  nextUser = () =>  { //find next user to show while browsing
    axios.get(`${BASE_URL}/users/next/${this.state.userId}`)
    .then(response => {
        this.setState({currentUser: response.data})
    })
    .catch(() => console.log('failed to get next user'))

    axios.get(`${BASE_URL}/users/comp/${this.state.userId}/${this.state.currentUser.id}`)
    .then(response => {
        this.state.currentUser.match=response
    })
    .catch(() => console.log('failed to get next user'))
  }

  judgeUser = (judgedId, status) => {
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: judgedId, status: status})
    .then(this.nextUser())
    .catch(() => console.log('failed to play user'))
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
  navProfile= () => {
    this.props.navigation.navigate('MyProfile', {userId: this.state.userId})
  }
 
 
 

  render() {
    //Expo audio
    const soundObject = new Audio.Sound();
    soundObject.loadAsync(require('../tracks/turnstile_blues.mp3'))
    .then(soundObject.playAsync())
      // Your sound is playing!
    .catch(error =>  {
      console.log('An error occurred!')
    })


    const {navigate} = this.props.navigation
    return (

      
      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>

        <View style={styles.profileBG}>
          <NavBar
            userId={this.state.userId}
            navPlaylist={this.navPlaylist}
            navQuestions={this.navQuestions}
            navCreate={this.navCreate}
            navSearch={this.navSearch}
            navContact={this.navContact}
            navProfile={this.navProfile}
          />

          <ScrollView style={styles.userCardScroll}>
            <UserCard
              user={this.state.currentUser}
            />
          
          </ScrollView>
        
        <PlayBar
          user={this.state.currentUser}
          judgeUser={this.judgeUser}
          nextUser={this.nextUser}
        />
      <Button title='roll it jim' onPress={() => soundObject.playAsync()} />  
    
        </View>
      </ImageBackground>
    )//return
  }//render


}












  // using localhost with phone:
  // getUser(userId) {        //This works - prints out data stringified below
  //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then(responseJson => {
  //     console.log('response...?')
  //     console.log(responseJson.data)
  //     this.setState({currentUser: responseJson.data})
  //   })
  //   .catch(console.log(`could not get user`))
  // }
  