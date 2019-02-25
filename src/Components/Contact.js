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
import {SecureStore} from 'expo'
import attachHeader from './Home'

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
      keysUp: false
    }
  }

  componentWillMount = () => {
    this.setState({userId: this.props.navigation.getParam('userId')})
  }
  componentDidMount = () => {
    if (this.props.navigation.getParam('chatUser')) { //check if taken here from user page
      console.log(this.props.navigation.getParam('chatUser'))
      this.goToChat(this.props.navigation.getParam('chatUser')) //this pulls down the user but already have them here. could cut down.
    }
    console.log(this.props.navigation.getParam('userId'), this.state.userId)

    this.getConvos()
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
    // this.props.navigation.addListener('willFocus', this.getConvos) //refresh on each view?
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
  goToChat = (user2) => {
    console.log('starting get messages')
    axios.get(`${BASE_URL}/messages/${this.state.userId}/${user2}`)
    .then(response => this.setState({messages: response.data.rows, inChat: true}))
    .then(() => console.log(this.state.messages))
    .catch(() => console.log('failed to get messages'))

    axios.get(`${BASE_URL}/users/${this.state.userId}/${user2}`)
    .then(response => this.setState({chatter: response.data.rows[0]})) //added the 0 back...should really normalize these on backend
    .then(() => console.log('chatter: ', this.state.chatter.id))
  }

  postMessage = () => {
    const msg = {sender_id: this.state.userId, receiver_id: this.state.chatter.id, body: this.state.newMessage}
    axios.post(`${BASE_URL}/messages`, msg)
    .then(() => this.setState({newMessage: ''}))
    .catch(() => console.log('could not send message'))
    this.goToChat(this.state.chatter.id)

  }

  backToList = () => {
    this.setState({inChat: false})
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }

  render() {
    console.log('userid contact: '+ this.state.userId)
    const {navigate} = this.props.navigation
  
    return (                              
      <ImageBackground source={require('../guitars/mic_tilt_left_big_low.jpg')} style={styles.imgBG}> 
        <View style={styles.playlistView}>  
          <NavBar
            navGen={this.navGen}
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


