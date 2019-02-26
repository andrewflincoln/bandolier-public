import React from 'react'
import {Text, TextInput, View, ImageBackground, Image, Button} from 'react-native'
import axios from 'axios'
import styles from '../styles'
import {SecureStore} from 'expo'
import {Font} from 'expo'



const BASE_URL = `https://quiet-garden-92157.herokuapp.com`
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.state= {
      email: 'jack@white.com',
      password: 'jack',
      showError: false,
      fontLoaded: false   
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      // 'dancing-script': require('../../assets/fonts/DancingScript-Regular.ttf')
      'belair': require('../../assets/fonts/Belair-Regular.otf')

    })
    this.setState({fontLoaded: true})
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
      <ImageBackground source={require('../guitars/IMG_20190208_065538007.jpg')} style={styles.loginImgBG}>
        <View style={styles.loginBG}>
          
          <View style ={styles.loginForm}>

            {this.state.fontLoaded ? 
            <Text style={{fontFamily: 'belair', fontSize: 59, alignSelf: 'center'}}>Bandolier</Text>
            // <Text style={styles.loginHeader}>Bandolier</Text>
                : null}

            <View style={styles.emailPasswordView}>
              {this.state.fontLoaded ? 
              <Text style={{fontFamily: 'belair', fontSize: 25}}>Email</Text>
                  : null}
              <TextInput
                style={styles.createInput}
                textContentType='emailAddress'
                placeholder='Email'
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />

              {this.state.fontLoaded ? 
              <Text style={{fontFamily: 'belair', fontSize: 25}}>Password</Text>
                  : null}
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
            </View>
            <Button style={styles.loginButton}
            marginBottom='10'
              title="Login"
              color='#519DE8'
              onPress={this.handleSignIn}
            />

            
          <Button
              title="Sign up"
              color='#519DE8'
              onPress={() => this.props.navigation.navigate('Create')}
            />

            


          </View>


        </View>
      </ImageBackground>
    )
  }


}












