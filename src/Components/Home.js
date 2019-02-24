import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
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

    }
  }

  componentWillMount = () => {
    this.nextUser()
  }


  nextUser = () =>  { //find next user to show while browsing
    axios.get(`${BASE_URL}/users/next/${this.state.userId}`)
    .then(response => {
        this.setState({currentUser: response.data})
    })
    .then( () =>  { 
        // console.log('url from nextUser: ', this.state.currentUser.url); 
        this.state.currentUser.url ? this.playUser(this.state.currentUser.url) 
        : this.playUser(`https://s3-us-west-2.amazonaws.com/bandolier-tracks/elevator_music.mp3`) //elevator music if no track
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
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
    this.stopUserSound()
  }


  // navQuestions = () => {
  //   this.props.navigation.navigate('Questions')
  // }
  // navCreate = () => {
  //   this.props.navigation.navigate('Create')
  // }
  // navSearch= () => {
  //   this.props.navigation.navigate('SearchPage')
  // }
  // navContact= () => {
  //   this.props.navigation.navigate('Contact', {userId: this.state.userId})
  // }
  // navProfile= () => {
  //   this.props.navigation.navigate('MyProfile', {userId: this.state.userId})
  // }


  // playUser = async (url) => {                    //try/await vs .then -- no difference? occasionally change mind.
  //   console.log('url given to playUser', url)
  //   this.state.userSound = new Audio.Sound();
  //   try {
  //     await this.state.userSound.loadAsync({uri: url});
  //     console.log('url after load', url)
  //     await this.state.userSound.playAsync();
      
  //   }
  //   catch (error) {
  //      console.log(error)
  //   }
  // }

  playUser = async (url) => {
    console.log('url given to playUser', url)
    this.state.userSound = new Audio.Sound();
      
    await this.state.userSound.loadAsync({uri: url})

    .then( () => this.state.userSound.playAsync() )
    .then(() =>     console.log('url after load', url))
    .catch (error => console.log(error) )
    
  }
  
  

  stopUserSound = async () => {
  //  this.state.userSound.stopAsync() 
  //  this.setState({userSound: null}) 
   await this.state.userSound.unloadAsync()
  }


  render() {
    const {navigate} = this.props.navigation
    return (

      
      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>

        <View style={styles.profileBG}>
          <NavBar
            navGen={this.navGen}
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
          stopUserSound={this.stopUserSound}
        />

        </View>
      </ImageBackground>
    )//return
  }//render


}



