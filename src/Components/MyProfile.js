import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import axios from 'axios'
import styles from '../styles'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
// import {SecureStore} from 'expo'
import * as SecureStore from 'expo-secure-store'
import ProfileBar from './ProfileBar'
import NavBar from './NavBar'
import UserCard from './UserCard'
// import {Font} from 'expo'
import * as Font from 'expo-font'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      userId: 0,   //'',
      fontLoaded: false,
      currentUser: {},
      
    }
  }

  UNSAFE_componentWillMount = async () => {
    this.setState({userId: this.props.navigation.getParam('userId')})

    await Font.loadAsync({
      'belair': require('../../assets/fonts/Belair-Regular.otf')
    })
    this.setState({fontLoaded: true})
  }
  componentDidMount = () => {
    this.getUser()
    this.props.navigation.addListener('willFocus', this.getUser)
  }
  getUser = () =>  { 
    axios.get(`${BASE_URL}/users/${this.state.userId}/${this.state.userId}`) //should be a "self route" but this works
    .then(response => {
        this.setState({currentUser: response.data}) //data vs data.rows[0]
    })
    .catch(() => console.log('failed to get user'))
  }
  signOut = () => {
    SecureStore.deleteItemAsync('token')
    this.props.navigation.navigate('Login')
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }
  
  navCreate = () => {
    this.props.navigation.navigate('Create', {pageStatus: 'update', user: this.state.currentUser}) //
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
            from='myprofile'
          />

          <View style={styles.myProfileHeadlineView}>
          <Text style={ {fontFamily: 'belair', fontSize: 45} }>Your Profile</Text>
          </View>
          
          <ScrollView style={styles.userCardScroll}>

            <View style={styles.profileInner}>  
              <Image
                style={styles.profilePic}
                source={{uri: user.img_url}}
                />
              <View style={styles.nameMatchBar}>
                <Text style={{fontFamily: 'belair', fontSize: 45, marginTop: 5}}>{user.username}</Text>
    
              </View>
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
          signOut={this.signOut}
        />
          
      
    
        </View>
      </ImageBackground>
    )//return
  }//render


}
