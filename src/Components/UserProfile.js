import React from 'react'
import {Text, View, ImageBackground, Image, Button} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import {SecureStore} from 'expo'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      currentUser: {}
    }
  }


  getUser (userId){
    // axios.get(`http://TMA-2-Iapetus:3000/users/1`) //this doesn't work.
    // axios.get(`http://192.168.122.1:3000/users/1`)
     axios.get(`${BASE_URL}/users/${userId}`)
    .then(response => {
      this.setState({currentUser: response.data[0]})

    })
    .catch(() => console.log(`could not get user`))
  }



  componentWillMount = async () => {
    // console.log('will mount')
    // SecureStore.getItemAsync('token')
    // .then(token => {
    //   axios(`https://quiet-garden-92157.herokuapp.com/login`), {
    //     method: 'get',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //       'Authorization': token ? `Bearer ${token}` : ''
    //     }
    //   }  
    // })
    // .then(response => {
    //   this.getUser(response.data.id)
    //   console.log(JSON.stringify(response))
    // })
    // const getEmail = SecureStore.getItemAsync('userEmail').then(result => console.log(result))
    // let userEmail = getEmail()
    this.getUser(1) //change with auth
  }

  //function to randomly pick matching user

  render() {

    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.profileBG}>
          {/* Maybe this inner view is a separate card component? */}
          <View style={styles.profileInner}>
          
     
     
        <Text>Welcome to the show, {this.state.currentUser.username}</Text>
  
          
            <Image
              style={styles.profilePic}
              // source={{uri: 'http://www.thetrapset.net/wp-content/uploads/2014/12/carla_aLux-2.jpg'}}
              source={{uri: this.state.currentUser.imgUrl}}
             />

            <Text style={styles.profileTextName}>{this.state.currentUser.username}</Text>

            {/* <Text style={styles.profileTextSectionHead}>Deal </Text> */}
            <Text style={styles.profileTextDeal}>{this.state.currentUser.deal}</Text>

            {/* <Text style={styles.profileTextSectionHead}>Bio</Text> */}
            <Text>{this.state.currentUser.bio}</Text>


            <View style={styles.genreInstrSection}>
              <View>
                <Text style={styles.profileTextSectionHead}>Genres </Text>
                <Text>{this.state.currentUser.genre_1}</Text>
                {this.state.currentUser.genre_2 ? 
                <Text>{this.state.currentUser.genre_2}</Text>
                : null }
                {this.state.currentUser.genre_2 ? 
                <Text>{this.state.currentUser.genre_3}</Text>
                : null }
              </View>
              <View style={styles.instrCol}>
                <Text style={styles.profileTextSectionHead}>Instruments </Text>
                <Text>{this.state.currentUser.instr_1}</Text>
                {this.state.currentUser.instr_2 ? 
                <Text>{this.state.currentUser.instr_2}</Text>
                : null }
                {this.state.currentUser.instr_3 ? 
                <Text>{this.state.currentUser.instr_3}</Text>
                : null }
              </View>
            </View>

            <Text style={styles.profileTextSectionHead}>Heroes </Text>
            <Text>{this.state.currentUser.heroes}</Text>

            <Text style={styles.profileTextSectionHead}>Influences </Text>
            <Text>{this.state.currentUser.influences}</Text>
             
            <View style={styles.playBar}>
              <Button
                title='Back'
                onPress={() => { if(this.state.currentUser.id > 0) 
                    this.getUser(this.state.currentUser.id -1); 
                    console.log(this.state.currentUser.imgUrl) } }
              />
              <Button
                title='Next'
                onPress={() => { if(this.state.currentUser.id <5) 
                    this.getUser(this.state.currentUser.id + 1); 
                    SecureStore.getItemAsync('token')
                    .then(result => (console.log(result)))  
                  } }
              />
            </View>

          </View> 
     
        </View>
      </ImageBackground>
    )
  }


}
















  // using localhost with phone:
  // getUser(userId) {        //This works - prints out data stringified below
  //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then(responseJson => {
  //     console.log('response...?')
  //     console.log(responseJson.data)
  //     this.setState({currentUser: responseJson.data})
  //   })
  //   .catch(console.log(`could not get user`))
  // }
  