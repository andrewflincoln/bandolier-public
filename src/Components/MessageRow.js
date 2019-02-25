import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'


function MessageRow(props) {
return (
    <View style={[props.sender === props.user ? styles.messageRowRight : styles.messageRowLeft]} >
        <Text style={styles.messageFont}>{props.body}</Text>
    </View>


  )
}

export default MessageRow