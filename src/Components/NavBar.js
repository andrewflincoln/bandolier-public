import React from 'react'
import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: false
    }
  }

  render() {

    // const {navigate} = this.props.navigation
    return (
    
      <View style={styles.navBar}>
        {/* <View style={styles.navBarInner}> */}
          <TouchableOpacity onPress={() => this.props.navGen('MyProfile')}>

          {this.props.from ==='myprofile' ? 
            <IconM color="lightskyblue" name="guitar-pick" size={25} />
            :<IconM color="white" name="guitar-pick" size={25} />}

            <Text style={styles.navBarFont}>Profile</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => this.props.navGen('SearchPage')}>
          {this.props.from ==='searchpage' ? 
            <IconI color="lightskyblue" name="ios-search" size={25} />
            :<IconI color="white" name="ios-search" size={25} />}
            <Text style={styles.navBarFont}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Home')}>
            {this.props.from ==='home' ? 
            <IconM color="lightskyblue" name="radio" size={25} />
            :<IconM color="white" name="radio" size={25} />}
            <Text style={styles.navBarFont}>Radio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Playlist')}>
          {this.props.from ==='playlist' ? 
            <IconM color="lightskyblue" name="playlist-play" size={25} />
            :<IconM color="white" name="playlist-play" size={25} />}
            <Text style={styles.navBarFont}>Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Contact')}>
          {this.props.from ==='contact' ? 
            <IconM color="lightskyblue" name="radio-tower" size={25} />
            :<IconM color="white" name="radio-tower" size={25} />}
            <Text style={styles.navBarFont}>Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Questions')}>
          {this.props.from ==='questions' ? 
            <IconM color="lightskyblue" name="comment-question" size={25} />
            :<IconM color="white" name="comment-question" size={25} />}
            <Text style={styles.navBarFont}>Interview</Text>
          </TouchableOpacity>
        {/* </View> */}

        
      </View> 
      

    )
  }
}
