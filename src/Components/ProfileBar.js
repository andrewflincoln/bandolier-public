import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'


function ProfileBar(props) {
  
  return (
   
    <View style={styles.profileBar}>


      <TouchableOpacity onPress={props.navCreate}>
        <IconM color="black" name="lead-pencil" size={35} />
      </TouchableOpacity>

 
    </View> 

  )

}

export default ProfileBar