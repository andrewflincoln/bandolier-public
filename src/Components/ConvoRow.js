import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function ConvoRow(props) {
  console.log('props are ' + JSON.stringify(props))
return (
    <TouchableOpacity style={styles.convoRow} onPress={() => props.goToChat(props.user.id)}>
      <Image 
        style={styles.convoRowPic} 
        source={{uri: props.user.img_url}} 
      />

      <View style={styles.rowTextBox}>
        <Text style={styles.rowTextName}>{props.user.username}</Text>
        <Text>{props.user.body}</Text>
      </View>
    </TouchableOpacity>


  )
}

export default ConvoRow