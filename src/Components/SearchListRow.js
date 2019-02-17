import React from 'react'

import {Text, TouchableOpacity, View, Image} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'

import IconI from 'react-native-vector-icons/Ionicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function SearchListRow(props) {
  console.log('props are ' + JSON.stringify(props))
return (
    <View style={styles.searchListRow}>
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

export default SearchListRow