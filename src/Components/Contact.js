import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, TextInput, ScrollView, 
    KeyboardAvoidingView, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NavBar from './NavBar'
import ConvoRow from './ConvoRow' //
import MessageRow from './MessageRow'
import PlaylistRow from './PlaylistRow'

import styles from '../styles'
import axios from 'axios';
const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 2,// 
      messages: [],
      convos: [],

      inChat: false,
      chatter: {},
      newMessage: '',
      keysUp: false
    }
  }


  componentDidMount = () => {
    this.getConvos()
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
    // this.props.navigation.addListener('willFocus', this.getPlaylist) //refresh on each view
  }
  _keyboardDidShow= () =>  {
    console.log(' the keyboard totally showed!@')
    this.setState({keysUp: true})
  }
  _keyboardDidHide= () =>  {
    console.log(' the keyboard totally hided!@')
    this.setState({keysUp: false})
  }

  getConvos = () => {
    console.log('starting get convos')
    axios.get(`${BASE_URL}/messages/convos/${this.state.userId}`)
    .then(response => this.setState({convos: response.data}))
    .catch(() => console.log('failed to get convos'))
  }
  goToChat = (user2) => {
    console.log('starting get messages')
    axios.get(`${BASE_URL}/messages/${this.state.userId}/${user2}`)
    .then(response => this.setState({messages: response.data.rows, inChat: true}))
    .then(() => console.log(this.state.messages))
    .catch(() => console.log('failed to get messages'))

    axios.get(`${BASE_URL}/users/${user2}`)
    .then(response => this.setState({chatter: response.data[0]}))
    .then(() => console.log(this.state.chatter))
  }

  postMessage = () => {
    const msg = {sender_id: this.state.userId, receiver_id: this.state.chatter.id, body: this.state.newMessage}
    axios.post(`${BASE_URL}/messages`, msg)
    .then(response => {
      console.log(response)
      // this.goToChat(this.state.chatter.id)
    })
    .catch('could not send message')
    
  }

  // getMessages = (user2) => {
  //   console.log('starting Get messages')
  //   axios.get(`${BASE_URL}/messages/${this.state.userId}/${user2}`)
  //   .then(response => this.setState({messages: response.data.rows}))
  //   .then(() => console.log(this.state.messages))
  //   .catch(() => console.log('failed to get messages'))

  // }


  navHome = () => {//prop function for navbar
    this.props.navigation.navigate('Home')
  }
  navQuestions = () => {
    this.props.navigation.navigate('Questions')
  }
  navSearch= () => {
    this.props.navigation.navigate('SearchPage')
  }
  navPlaylist= () => {
    this.props.navigation.navigate('Playlist')
  }
  

  render() {
    const {navigate} = this.props.navigation
    return (                            //mic pic?
      <ImageBackground source={require('../guitars/IMG_20190208_070218915_HDR.jpg')} style={styles.imgBG}> 
        <View style={styles.playlistView}>  
          <NavBar
            navHome={this.navHome}
            navQuestions={this.navQuestions}
            navSearch={this.navSearch}
            navPlaylist={this.navPlaylist}
            userId = {this.state.userId}
          />

          {
            !this.state.inChat ? 
            this.state.convos.map(guy => 
              <ConvoRow
                key={guy.id}
                user={guy}
                goToChat={this.goToChat}

              />
            )
          : 
        
          <View>
          
            <PlaylistRow
              user={this.state.chatter}
            />
            <View style={[this.state.keysUp ? styles.messagesViewKeys : styles.messagesViewNoKeys]}>
              <ScrollView >  
                {this.state.messages.map(msg => 
                  
                  <MessageRow 
              
                      key={msg.key}
                      body={msg.body}
                      user={this.state.userId}
                      sender={msg.sender_id}
                  />
                )
                }

      
              </ScrollView>
              <View style={styles.inputSendRow}>
                <TextInput multi-line={true} placeHolder='Message'
                    value={this.state.newMessage}
                    onChangeText={newMessage => this.setState({newMessage})}
                    style={styles.messageInput}>
                </TextInput>
                <TouchableOpacity onPress={this.postMessage}>
                  <Icon name='send' size={30}/>
                </TouchableOpacity>
              </View>
            </View>


          </View>
         
          }
        </View> 
      </ImageBackground>
    )
  }
}


