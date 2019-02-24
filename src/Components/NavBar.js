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
      userId: 2 ///
    }
  }


  
  render() {

    // const {navigate} = this.props.navigation
    return (
    
      <View style={styles.navBar}>
        {/* <View style={styles.navBarInner}> */}
          <TouchableOpacity onPress={() => this.props.navGen('MyProfile')}>
            <IconM color="white" name="guitar-pick" size={25} />
            <Text style={styles.navBarFont}>Profile</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => this.props.navGen('SearchPage')}>
            <IconI color="white" name="ios-search" size={25} />
            <Text style={styles.navBarFont}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Home')}>
            <IconM color="white" name="radio" size={25} />
            <Text style={styles.navBarFont}>Radio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Playlist')}>
            <IconM color="white" name="playlist-play" size={25} />
            <Text style={styles.navBarFont}>Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Contact')}>
            <IconM color="white" name="radio-tower" size={25} />
            <Text style={styles.navBarFont}>Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navGen('Questions')}>
            <IconM color="white" name="comment-question" size={25} />
            <Text style={styles.navBarFont}>Interview</Text>
          </TouchableOpacity>
        {/* </View> */}

        
      </View> 
      

    )
  }
}
