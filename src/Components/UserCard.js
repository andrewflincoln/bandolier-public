import React from 'react'
import {Text, View, Image} from 'react-native'
import styles from '../styles'

import * as Font from 'expo-font'


export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'belair': require('../../assets/fonts/Belair-Regular.otf')
    })
    this.setState({fontLoaded: true})
  }

  render() {
  

    return (
    
      <View style={styles.profileInner}>  
        <Image
          style={styles.profilePic}
          source={{uri: this.props.user.img_url}}
          />
        <View style={styles.nameMatchBar}>

          {this.state.fontLoaded ? 
          <Text style={[ this.props.user.username && this.props.user.username.length > 8 ? {fontFamily: 'belair', fontSize: 35, marginTop: 5 } 
            : {fontFamily: 'belair', fontSize: 45, marginTop: 5 }]}>{this.props.user.username}</Text>
          : null}

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

        
        
        {this.props.user.heroes != '' ? 
        <Text style={styles.profileTextSectionHead}>Heroes </Text>
        : null }
        <Text>{this.props.user.heroes}</Text>

        {this.props.user.influences != '' ? 
        <Text style={styles.profileTextSectionHead}>Influences </Text>
        : null }
        <Text>{this.props.user.influences}</Text>

        {this.props.user.bio != '' ? 
        <Text style={styles.profileTextSectionHead}>Bio</Text>
        : null
        }
        <Text>{this.props.user.bio}</Text>
       

      </View>  
    )
  }

}