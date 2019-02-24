import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfileBar from './ProfileBar'
import NavBar from './NavBar'
import UserCard from './UserCard'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 2,   //'',

      currentUser: {},
      
    }
  }


  // componentWillMount = () => {
  //   this.setState({userId: this.props.navigation.getParam('userId')})
  // }
  componentDidMount = () => {
    this.getUser()
    // this.props.navigation.addListener('willFocus', this.setUser)
  }
  getUser = () =>  { 
    axios.get(`${BASE_URL}/users/${this.state.userId}`) 
    .then(response => {
        // console.log(JSON.stringify(response))
        this.setState({currentUser: response.data[0]})
    })
    .catch(() => console.log('failed to get user'))
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }
  
  navCreate = () => {
    this.props.navigation.navigate('Create') //
  }

 

  render() {


    const {navigate} = this.props.navigation
    const user = this.state.currentUser
    return (
      <ImageBackground source={require(`../guitars/Marshall_coolest.jpg`)} style={styles.imgBG}>
        <View style={styles.profileBG}>
          <NavBar
            userId={this.state.userId}
            navGen={this.navGen}
            setUser = {this.setUser}
          />

          <View style={styles.myProfileHeadlineView}>
          <Text style={styles.myProfileHeadlineText}>Bob's Profile</Text>
          </View>
          
          <ScrollView style={styles.userCardScroll}>





            <View style={styles.profileInner}>  
              <Image
                style={styles.profilePic}
                source={{uri: user.img_url}}
                />
              <View style={styles.nameMatchBar}>
                <Text style={styles.profileTextName}>{user.username}</Text>
                <IconM name='lead-pencil' size={20}/>
              </View>
              {/* <Text style={styles.profileTextSectionHead}>Deal </Text> */}
              <Text style={styles.profileTextDeal}>{user.deal}</Text>

            
              <View style={styles.genreInstrSection}>
                <View>
                  <Text style={styles.profileTextSectionHead}>Genres </Text>
                  <Text>{user.genre_1}</Text>
                  {user.genre_2 ? 
                  <Text>{user.genre_2}</Text>
                  : null }
                  {user.genre_2 ? 
                  <Text>{user.genre_3}</Text>
                  : null }
                </View>
                <View style={styles.instrCol}>
                  <Text style={styles.profileTextSectionHead}>Instruments </Text>
                  <Text>{user.instr_1}</Text>
                  {user.instr_2 ? 
                  <Text>{user.instr_2}</Text>
                  : null }
                  {user.instr_3 ? 
                  <Text>{user.instr_3}</Text>
                  : null }
                </View>
              </View>

              <Text style={styles.profileTextSectionHead}>Heroes </Text>
              <Text>{user.heroes}</Text>

              <Text style={styles.profileTextSectionHead}>Influences </Text>
              <Text>{user.influences}</Text>

              <Text style={styles.profileTextSectionHead}>Bio</Text>
              <Text>{user.bio}</Text>

            </View>  


        </ScrollView>
        
        



 
        <ProfileBar // do we want a bar?
          navCreate={this.navCreate}
        />
          
      
    
        </View>
      </ImageBackground>
    )//return
  }//render


}
