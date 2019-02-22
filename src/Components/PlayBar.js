import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import MarqueeText from 'react-native-marquee';




function PlayBar(props) {
  return (
    <View>        
        <View>
        <MarqueeText
          style={styles.tickerInner}
          duration={10000}
          marqueeOnStart
          loop
          bounce
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
          {`"${props.user.title}"   ${props.user.user_contr}`}
        </MarqueeText>
        </View>
              
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


    </View>


  )

}

export default PlayBar