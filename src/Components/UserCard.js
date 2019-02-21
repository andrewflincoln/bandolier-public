import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import styles from '../styles'
import {Audio} from 'expo'


export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // userSound: new Audio.Sound()
    }
  }

  // componentDidMount() {
  //   console.log(this.props.user.url, this.props.user.username)
  //   this.playUser(this.props.user.url)
  // }

  // componentWillUnmount() {
  //   console.log('unmounting and hopefully stopping track')
  //   this.state.userSound.stopAsync()
  // }

  // playUser = async (url) => {
  //   this.state.userSound = new Audio.Sound();
  //   try {
  //     await this.state.userSound.loadAsync({uri: url});
  //     await this.state.userSound.playAsync();
  //   }
  //   catch (error) {
  //      console.log(url, error)
  //   }
  // }
  // playUser = async (url) => {
  //   soundObject= new Audio.Sound();
  //   try {
  //     await soundObject.loadAsync({uri: url});
  //     await soundObject.playAsync();
  //   }
  //   catch (error) {
  //      console.log(url, error)
  //   }
  // }
  render() {
    // console.log('url received via props: ', this.props.user.url)
    // this.props.user.url ? 
    // this.playUser(this.props.user.url) //working, avoids "null source" error
    // : null 

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