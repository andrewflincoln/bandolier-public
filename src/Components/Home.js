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

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`


export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 2,   //'',
      currentUser: {},
      recents: [],
      currentSound: new Audio.Sound(),
      
      brantSound: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`,
      autoluxSound: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`,
      vivianSound: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`
    }
  }

  componentWillMount = () => {
    this.nextUser()
    // this.state.currentSound = new Audio.Sound()
    // this.state.currentSound.loadAsync({uri: this.state.autoluxSound})
    // .then( () => this.state.currentSound.playAsync() )
  }
  // componentDidMount = () => {
  //   this.state.currentSound.playAsync()
  // }


  nextUser = () =>  { //find next user to show while browsing
    axios.get(`${BASE_URL}/users/next/${this.state.userId}`)
    .then(response => {

        this.setState({currentUser: response.data})
        console.log(this.state.currentUser.url)
    })
    .then( () =>  this.playUser(this.state.currentUser.url) )
    // .then( () => this.state.currentSound.loadAsync({uri: this.state.currentUser.url}) )
    // .then( () => this.state.currentSound.playAsync() )
    .catch(() => console.log('failed to get next user') )
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

  playItSam = async () => {
   this.state.currentSound.playAsync()
    .catch( () => console.log('could not play async')) 
  }

  playUser = async (url) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({uri: url});
      await soundObject.playAsync();
    }
    catch (error) {
       console.log('An error occurred!')
    }
  }
   


  render() {
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
              playItSam={this.playItSam}
              user={this.state.currentUser}
            />
          
          </ScrollView>
        
        <PlayBar
          user={this.state.currentUser}
          judgeUser={this.judgeUser}
          nextUser={this.nextUser}
        />

        </View>
      </ImageBackground>
    )//return
  }//render


}



