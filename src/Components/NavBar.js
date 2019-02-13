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
      userId: 1 ///
    }
  }


  
  render() {
    // const {navigate} = this.props.navigation
    return (
    
      <View style={styles.navBar}>
        {/* <View style={styles.navBarInner}> */}
          <TouchableOpacity>
            <IconM color="white" name="guitar-pick" size={25} />
            <Text style={styles.navBarFont}>Profile</Text>
          </TouchableOpacity>
        
          <TouchableOpacity>
            <IconI color="white" name="ios-search" size={25} />
            <Text style={styles.navBarFont}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.navExplore}>
            <IconM color="white" name="radio" size={25} />
            <Text style={styles.navBarFont}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.navPlaylist}>
            <IconM color="white" name="playlist-play" size={25} />
            <Text style={styles.navBarFont}>Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <IconM color="white" name="radio-tower" size={25} />
            <Text style={styles.navBarFont}>Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <IconM color="white" name="comment-question" size={25} />
            <Text style={styles.navBarFont}>Quiz</Text>
          </TouchableOpacity>
        {/* </View> */}

        
      </View> 
      

    )
  }
}
