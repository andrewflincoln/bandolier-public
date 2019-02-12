import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import {SecureStore} from 'expo'
import UserCard from './UserCard'
import PlayBar from './PlayBar'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 5,   //dummy user login
      currentUser: {},
      recents: []
    }
  }

  componentWillMount = () => {
    this.nextUser()
  }

  // getUser = (id) => {
  //    axios.get(`${BASE_URL}/users/${id}`)
  //   .then(response => {
  //     this.setState({currentUser: response.data[0]})
  //   })
  //   .catch(() => console.log(`could not get user`))
  // }

  nextUser = () =>  { //find next user to show while browsing
    axios.get(`${BASE_URL}/users/next/${this.state.userId}`)
    .then(response => {
        this.setState({currentUser: response.data})
    })
    .catch(() => console.log('failed to get next user'))
  }

  judgeUser = (judgedId, status) => {
    axios.post(`${BASE_URL}/relations`, {user_1: this.state.userId, user_2: judgedId, status: status})
    .then(this.nextUser())
    .catch(() => console.log('failed to play user'))
  }

  render() {

    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.profileBG}>
 

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
  