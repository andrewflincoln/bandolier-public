import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../styles'
import axios from 'axios'
import NavBar from './NavBar'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userId: 7,
      currentQ: {},
      answer: 0,
    }
  }

  componentWillMount() {
    this.getNextQuestion()
  }

  // getNextQuestion = async () =>  { //sometimes getting a 304 error here (not on Postman)
  //   fetch(`${BASE_URL}/questions/next/${this.state.userId}`)
  //   .then(response => response.json())
  //   .then(response => this.setState({currentQ: response}))
  //   .then(() => this.setState({answer: 0}))
  //   .catch(() => console.log('failed to get next q'))

  // }

  getNextQuestion = () =>  { //sometimes getting a 304 error here (but not on Postman)
    axios.get(`${BASE_URL}/questions/next/${this.state.userId}`)
    .then(response => {
        this.setState({currentQ: response.data})
    })
    .then(() => this.setState({answer: 0}))
    
    .catch(() => console.log('failed to get next q'))
  }

  submitAnswer = () => { //this works flawlessly, including the invocation of the above function
    axios.post(`${BASE_URL}/questions`, {userId: this.state.userId, questionId: this.state.currentQ.id, answer: this.state.answer})
    .then(this.getNextQuestion())
  }

  navHome = () => {//prop function for navbar
    this.props.navigation.navigate('Home')
  }
  navPlaylist = () => {
    this.props.navigation.navigate('Playlist')
  }
  


  render() {
    const q = this.state.currentQ
    return (

    
      <View style={styles.questionsPage}>

      <NavBar
        userId={this.state.userId}
        navPlaylist={this.navPlaylist}
        navHome={this.navHome}

      />


        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{q.question_text}</Text>
        </View>

        <TouchableOpacity onPress={() => this.setState({answer: 1})} 
            style={[this.state.answer===1 ? styles.selectedAnswer : styles.optionCard]}>
          <Text>{q.option_1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({answer: 2})} 
            style={[this.state.answer===2 ? styles.selectedAnswer : styles.optionCard]}>
          <Text>{q.option_2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({answer: 3})} 
            style={[this.state.answer===3 ? styles.selectedAnswer : styles.optionCard]}>
          <Text>{q.option_3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({answer: 4})} 
            style={[this.state.answer===4 ? styles.selectedAnswer : styles.optionCard]}>
          <Text>{q.option_4}</Text>
        </TouchableOpacity>

        <View style={styles.questionSubmitView}>  
           <TouchableOpacity style={styles.questionSubmit} onPress={this.getNextQuestion}>
             <Text style={styles.answerButtonText}>
               Skip
             </Text>
           </TouchableOpacity>

          <TouchableOpacity style={styles.questionSubmit} onPress={this.submitAnswer}>
            <Text style={styles.answerButtonText}>
              Answer
            </Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }


}