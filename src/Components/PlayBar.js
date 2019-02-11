import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'


function PlayBar(props) {
  console.log(props.user.id)
  return (
   
    <View style={styles.playBar}>
      <Button
        title='Back'
        onPress={ () => 
            props.getUser(props.user.id -1)
        }
      />
      <Button
        title='Next'
        onPress={() => props.getUser(props.user.id+1)}

        
      />
    </View> 

  )

}

export default PlayBar