import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../styles'
import axios from 'axios'
import Navbar from './NavBar'



const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userId: 6,
      currentQ: {},
      answer: '',
    }
  }

  componentWillMount() {
    this.getNextQuestion()
  }

  getNextQuestion = () =>  { 
    console.log('starting Get Next Q')

    fetch(`${BASE_URL}/questions/next/${this.state.userId}`)
    .then(response => response.json())
    // .then((response) => console.log(response))
    .then(response => this.setState({currentQ: response}))
    // axios.get(`${BASE_URL}/questions/next/${this.state.userId}`)
    // .then(response => {
    //     console.log(JSON.stringify(response))
    //     this.setState({currentQ: response.data})
    // })
    // .catch(() => console.log('failed to get next q'))
  }

 

  render() {
    return (
      <View>


        <View style={styles.questionCard}>
          <Text>{this.state.currentQ.question_text}</Text>


        </View>


      </View>
    )
  }


}