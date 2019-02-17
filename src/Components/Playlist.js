import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native'
import NavBar from './NavBar'
import PlaylistRow from './PlaylistRow'

import styles from '../styles'
import Axios from 'axios';
const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 2,// '',
      listUsers:  [],

      
    }
  }


  componentDidMount = () => {
    this.getPlaylist()
    this.props.navigation.addListener('willFocus', this.getPlaylist) //
  }

  getPlaylist = () => {
    console.log('starting get playlist')
    fetch(`${BASE_URL}/relations/playlist/${this.state.userId}`)
    .then(response => response.json())
    .then(response => this.setState({listUsers: response.rows}))
  }

  navHome = () => {//prop function for navbar
    this.props.navigation.navigate('Home')
  }
  navQuestions = () => {
    this.props.navigation.navigate('Questions')
  }
  navSearch= () => {
    this.props.navigation.navigate('SearchPage')
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_070218915_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.playlistView}>  
          <NavBar
            navHome={this.navHome}
            navQuestions={this.navQuestions}
            navSearch={this.navSearch}
            userId = {this.state.userId}
          />
          {
            this.state.listUsers.map(guy => 
              <PlaylistRow
                key={guy.id}
                user={guy}
              />
            )
          }

        </View>
      </ImageBackground>
    )
  }
}


