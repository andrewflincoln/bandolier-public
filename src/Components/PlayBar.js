import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

function PlayBar(props) {
  return (
   
    <View style={styles.playBar}>
      <TouchableOpacity onPress={() => props.judgeUser(props.user.id, 'stopped')}>
      <IconF color="black" name="stop" size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.judgeUser(props.user.id, 'played')}>
        
        <IconF color="black" name="play" size={35} />

      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.stopUserSound(); props.nextUser(props.user.id)  } }>
        <IconM color="black" name="skip-next" size={55} />
      </TouchableOpacity>
    </View> 

  )

}

export default PlayBar