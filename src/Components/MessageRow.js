import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function MessageRow(props) {
  console.log('props are ' + JSON.stringify(props))
return (
    <View style={[props.sender === props.user ? styles.messageRowRight : styles.messageRowLeft]} >
           {/* style={[this.state.answer===1 ? styles.selectedAnswer : styles.optionCard]} */}
      {/* <Image 
        style={styles.convoRowPic} 
        source={{uri: props.user.img_url}} 
      /> */}

      {/* <View style={styles.rowTextBox}> */}
        {/* <Text style={styles.rowTextName}>{props.user.username}</Text> */}
        <Text style={styles.messageFont}>{props.body}</Text>
      {/* </View> */}
    </View>


  )
}

export default MessageRow