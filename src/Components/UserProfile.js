import React from 'react'
import {Text, View, ImageBackground, Image, Button, ScrollView} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import {SecureStore} from 'expo'
import UserCard from './UserCard'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    

    this.state= {
      userId: 6,   //dummy user login
      currentUser: {}
    }
  }


  getUser (id){
    // axios.get(`http://TMA-2-Iapetus:3000/users/1`) //this doesn't work.
    // axios.get(`http://192.168.122.1:3000/users/1`)
     axios.get(`${BASE_URL}/users/${id}`)
    .then(response => {
      this.setState({currentUser: response.data[0]})

    })
    .catch(() => console.log(`could not get user`))
  }



  componentWillMount = () => {
    this.getUser(1) 
  }

  //function to randomly pick matching user

  render() {

    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065249773_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.profileBG}>
          {/* Maybe this inner view is a separate card component? */}

          <ScrollView>
            <UserCard
              user={this.state.currentUser}
            />


          </ScrollView>
        
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
      
                } }
            />
          </View> 
    
        </View>
      </ImageBackground>
    )//return
  }//render


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
  