import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'


function UserCard(props) {
   const {img_url} = props.user
  return (

    <View style={styles.profileInner}>    
      <Image
        style={styles.profilePic}
        source={{uri: img_url}}
        />

      <Text style={styles.profileTextName}>{props.user.username}</Text>

      {/* <Text style={styles.profileTextSectionHead}>Deal </Text> */}
      <Text style={styles.profileTextDeal}>{props.user.deal}</Text>

     


      <View style={styles.genreInstrSection}>
        <View>
          <Text style={styles.profileTextSectionHead}>Genres </Text>
          <Text>{props.user.genre_1}</Text>
          {props.user.genre_2 ? 
          <Text>{props.user.genre_2}</Text>
          : null }
          {props.user.genre_2 ? 
          <Text>{props.user.genre_3}</Text>
          : null }
        </View>
        <View style={styles.instrCol}>
          <Text style={styles.profileTextSectionHead}>Instruments </Text>
          <Text>{props.user.instr_1}</Text>
          {props.user.instr_2 ? 
          <Text>{props.user.instr_2}</Text>
          : null }
          {props.user.instr_3 ? 
          <Text>{props.user.instr_3}</Text>
          : null }
        </View>
      </View>

      <Text style={styles.profileTextSectionHead}>Heroes </Text>
      <Text>{props.user.heroes}</Text>

      <Text style={styles.profileTextSectionHead}>Influences </Text>
      <Text>{props.user.influences}</Text>

      <Text style={styles.profileTextSectionHead}>Bio</Text>
      <Text>{props.user.bio}</Text>

    </View>  
  )

}

export default UserCard