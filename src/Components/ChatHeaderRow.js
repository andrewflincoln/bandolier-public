import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function ChatHeaderRow(props) {
return (
    <View style={styles.chatHeaderRow}>
      
      <Image 
        style={styles.rowPic} 
        source={{uri: props.user.img_url}} 
      />

      <View style={styles.rowTextBox}>
        <Text style={styles.rowTextName}>{props.user.username}</Text>
        <Text>{props.user.deal}</Text>
      </View>
    </View>


  )
}


export default ChatHeaderRow