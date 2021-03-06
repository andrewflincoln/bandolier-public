import React from 'react'
import {Text, TouchableOpacity, View, ImageBackground, TextInput, ScrollView, 
    KeyboardAvoidingView, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NavBar from './NavBar'
import ConvoRow from './ConvoRow' //
import MessageRow from './MessageRow'
import ChatHeaderRow from './ChatHeaderRow'

import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../styles'
import axios from 'axios';


const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 0,// 
      messages: [],
      convos: [],

      inChat: false,
      chatter: {},
      newMessage: '',
      keysUp: false,
      testString: 'nope'
    }

  }

  UNSAFE_componentWillMount = () => {
    this.setState({userId: this.props.navigation.getParam('userId')})
  }
  componentDidMount = () => {
    if (this.props.navigation.getParam('chatUser')) { //check if taken here from user page
      this.goToChat(this.props.navigation.getParam('chatUser')) //this pulls down the user but already have them here. could cut down.
    }

    this.getConvos()
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
 
  }
  _keyboardDidShow= () =>  {
    this.setState({keysUp: true})
  }
  _keyboardDidHide= () =>  {
    this.setState({keysUp: false})
  }

  getConvos = () => {
    axios.get(`${BASE_URL}/messages/convos/${this.state.userId}`)
    .then(response => this.setState({convos: response.data}))
    .catch(() => console.log('failed to get convos'))
  }
  goToChat = async (user2) => {
    await axios.get(`${BASE_URL}/messages/${this.state.userId}/${user2}`)
    .then(response => this.setState({messages: response.data.rows, inChat: true}))
    .catch(() => console.log('failed to get messages'))

    axios.get(`${BASE_URL}/users/${this.state.userId}/${user2}`)
    .then(response => this.setState({chatter: response.data})) //took the [0] off again. lol.
  }

  postMessage = async () => {
    const msg = {sender_id: this.state.userId, receiver_id: this.state.chatter.id, body: this.state.newMessage}
    await axios.post(`${BASE_URL}/messages`, msg)
    .then(async () =>  await axios.get(`${BASE_URL}/messages/${this.state.userId}/${this.state.chatter.id}`) )
    .then(response => {
      this.setState({messages: response.data.rows, newMessage: ''})
    })

  }

  backToList = () => {
    this.setState({inChat: false})
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }

  render() {
    const {navigate} = this.props.navigation
  
    return (                              
      <ImageBackground source={require('../guitars/mic_tilt_left_big_low.jpg')} style={styles.imgBG}> 
        <View style={styles.playlistView}>  
          <NavBar
            navGen={this.navGen}
            userId = {this.state.userId}
            from='contact'
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
            <View style={styles.chatHeader}>
              <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.backToList()}>
                <IconM name='skip-previous' size={50} />
              </TouchableOpacity>
              <ChatHeaderRow
                user={this.state.chatter}
                backToList={this.backToList}
              />
            </View>
            <View style={[this.state.keysUp ? styles.messagesViewKeys : styles.messagesViewNoKeys]}>
              <ScrollView style={styles.messageScroll}>  
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
              {/* <View style={[this.state.keysUp? styles.inputSendRowKeys : styles.inputSendRowNoKeys]}> */}
              <View style={styles.inputSendRowNoKeys}>
                <TextInput multi-line={true} placeHolder='Message'
                    value={this.state.newMessage}
                    onChangeText={newMessage => this.setState({newMessage})}
                    style={styles.messageInput}>
                </TextInput>
                <TouchableOpacity onPress={this.postMessage}>
                  <Icon name='send' size={50}/>
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


