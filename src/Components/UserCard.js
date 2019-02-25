import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import {Audio} from 'expo'


export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
  

    return (
    
      <View style={styles.profileInner}>  
        <Image
          style={styles.profilePic}
          source={{uri: this.props.user.img_url}}
          />
        <View style={styles.nameMatchBar}>
          <Text style={styles.profileTextName}>{this.props.user.username}</Text>
          <Text style={styles.profileTextName}>{this.props.user.match}</Text>
        </View>
        <Text style={styles.profileTextDeal}>{this.props.user.deal}</Text>

      
        <View style={styles.genreInstrSection}>
          <View>
            <Text style={styles.profileTextSectionHead}>Genres </Text>
            <Text>{this.props.user.genre_1}</Text>
            {this.props.user.genre_2 ? 
            <Text>{this.props.user.genre_2}</Text>
            : null }
            {this.props.user.genre_2 ? 
            <Text>{this.props.user.genre_3}</Text>
            : null }
          </View>
          <View style={styles.instrCol}>
            <Text style={styles.profileTextSectionHead}>Instruments </Text>
            <Text>{this.props.user.instr_1}</Text>
            {this.props.user.instr_2 ? 
            <Text>{this.props.user.instr_2}</Text>
            : null }
            {this.props.user.instr_3 ? 
            <Text>{this.props.user.instr_3}</Text>
            : null }
          </View>
        </View>

        <Text style={styles.profileTextSectionHead}>Heroes </Text>
        <Text>{this.props.user.heroes}</Text>

        <Text style={styles.profileTextSectionHead}>Influences </Text>
        <Text>{this.props.user.influences}</Text>

        <Text style={styles.profileTextSectionHead}>Bio</Text>
        <Text>{this.props.user.bio}</Text>
       

      </View>  
    )
  }

}