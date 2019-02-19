import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'


function SearchedBar(props) {
  
  return (
   
    <View style={styles.playBar}>

      <TouchableOpacity onPress={props.navSearch}>
        <IconM color="black" name="skip-previous" size={55} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => props.stopUser(props.user.id)}>
        <IconF color="black" name="stop" size={25} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.addToPlaylist(props.user.id)}>
        <IconF color="black" name="play" size={35} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.contactUser(props.user)}>
        <IconM color="black" name="radio-tower" size={35} />
      </TouchableOpacity>

 
    </View> 

  )

}

export default SearchedBar