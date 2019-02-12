import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'

function PlayBar(props) {
  return (
   
    <View style={styles.playBar}>
      <TouchableOpacity onPress={() => props.judgeUser(props.user.id, 'stopped')}>
      <IconF color="black" name="stop" size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.judgeUser(props.user.id, 'played')}>
        
        <IconF color="black" name="play" size={35} />

      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.nextUser(props.user.id)}>
        <IconI color="black" name="md-skip-forward" size={30} />
      </TouchableOpacity>
    </View> 

  )

}

export default PlayBar