import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function PlaylistRow(props) {
return (
  <TouchableOpacity onPress={() => props.goToProfile(props.user)}>
    <View style={styles.playlistRow}>
    
        <Image 
          style={styles.rowPic} 
          source={{uri: props.user.img_url}} 
        />
    

      <View style={styles.rowTextBox}>
        <Text style={styles.rowTextName}>{props.user.username}</Text>
        <Text>{props.user.deal}</Text>
      </View>
    </View>
  </TouchableOpacity>

  )
}


export default PlaylistRow