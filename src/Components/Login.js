import React from 'react'
import {Text, TextInput, View, ImageBackground, Image, Button} from 'react-native'
import axios from 'axios'
import styles from '../styles'
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


  handleSignIn = event => { 
    event.preventDefault()
    SecureStore.getItemAsync('token')
    .then( token => {
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
      this.setState({showError: false})

      SecureStore.setItemAsync('token', response.data.token)

      this.props.navigation.navigate('Home', {userId: response.data.user.id})
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
            <Text style={styles.loginFormText}>Email</Text>
            <TextInput
              style={styles.createInput}
              textContentType='emailAddress'
              placeholder='Email'
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />

            <Text style={styles.loginFormText}>Password</Text>
            <TextInput
              style={styles.createInput}
              secureTextEntry={true}
              placeholder='Password'
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
            />
            {
              this.state.showError ? <Text>Sorry, that didn't work. Try again, or sign up below!</Text>
              : null
            }
            <Button
              title="Login"
              color='#8EE8B9'
              onPress={this.handleSignIn}
              // onPress = {() => navigate('UserProfile')}
            />

            
          <Button
              title="Join right now!"
              text='black'
              color='#8EE8B9'
              onPress={() => this.props.navigation.navigate('Create')}
              // onPress = {() => navigate('UserProfile')}
            />

            


          </View>


        </View>
      </ImageBackground>
    )
  }


}












