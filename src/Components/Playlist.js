import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native'
import NavBar from './NavBar'
import PlaylistRow from './PlaylistRow'

import styles from '../styles'
import axios from 'axios';
const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
import attachHeader from './Home'


export default class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      listUsers:  [],

      
    }
  }


  componentWillMount = () => {
    this.setState({userId: this.props.navigation.getParam('userId')})
  }
  componentDidMount = () => {

    this.getPlaylist()
    this.props.navigation.addListener('willFocus', this.getPlaylist) //
  }


  getPlaylist = () => {
    console.log('starting get playlist')
    axios.get(`${BASE_URL}/relations/playlist/${this.state.userId}`, attachHeader())
    .then(response => this.setState({listUsers: response.data.rows}))
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }
  

  goToProfile = (user) => {
    console.log('user passed: ' + JSON.stringify(user))
    this.props.navigation.navigate('ProfileDisplay', {viewUser: user, barType: 'playlist', userId: this.state.userId})
  }

 

  render() {
    console.log('userid playlist: '+ this.state.userId)
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_070218915_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.playlistView}>  
          <NavBar
            navGen={this.navGen}
            userId = {this.state.userId}
        
          />
          {
            this.state.listUsers.map(guy => 
              <PlaylistRow
                key={guy.id}
                user={guy}
                goToProfile={this.goToProfile}
              />
            )
          }

        </View>
      </ImageBackground>
    )
  }
}


