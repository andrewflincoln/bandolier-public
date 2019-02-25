import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'

function ConvoRow(props) {
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