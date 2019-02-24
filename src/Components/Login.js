import React from 'react'
import {Text, TextInput, View, ImageBackground, Image, Button} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import request from '../utils/request'
import {SecureStore} from 'expo'



const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.state= {
      email: 'carla@autolux.com',
      password: 'carla',
      showError: false   
    }
  }


  handleSignIn = event => { //async?
    console.log('starting handle signin')
    event.preventDefault()
    SecureStore.getItemAsync('token')
    .then( token => {
      console.log('result from storage: ' + JSON.stringify(token))
      axios(`https://quiet-garden-92157.herokuapp.com/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        data: {
          email: this.state.email,
          password: this.state.password
        }
    })

    .then(response => {
      console.log('token response: ' + JSON.stringify(response.data))
      this.setState({showError: false})

      SecureStore.setItemAsync('token', response.data.token)
      // SecureStore.setItemAsync('id', response.data.user.id)
      SecureStore.getItemAsync('token').then(testresult => { (console.log('token stored as ' + testresult )) })  //check
      // SecureStore.getItemAsync('id').then(testresult => { (console.log('id stored as ' + testresult + typeof(testresult) )) })  //check

  
      this.props.navigation.navigate('Home', {userId: response.data.user.id}) //logging in and getting to home page, need id 
//return login request
    })
    .catch(error => {
      console.log('caught after nav ' + error)
      this.setState({ showError: true })
    })
  })
  }




  render() {

    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_070218915_HDR.jpg')} style={styles.loginImgBG}>
        <View style={styles.loginBG}>
          
          <View style ={styles.loginForm}>
            <Text style={styles.loginHeader}>Bandolier</Text>
            <Text style={styles.loginFormText}>Login email</Text>
            <TextInput
              style={styles.loginFormText}
              placeholder='Email'
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />

            <Text style={styles.loginFormText}>Password</Text>
            <TextInput
              style={styles.loginFormText}
              placeholder='Password'
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
            />

            <Button
              title="Login"
              onPress={this.handleSignIn}
              // onPress = {() => navigate('UserProfile')}
            />

            {
              this.state.showError ? <Text>ERROR.</Text>
              : <Text>No errors here, all good!</Text>
            }

          </View>


        </View>
      </ImageBackground>
    )
  }


}












