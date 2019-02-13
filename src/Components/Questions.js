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
    .then(response => this.setState({currentQ: response}))
    .catch(() => console.log('failed to get next q'))
  }

 
  // <View style={[(this.props.isTrue) ? styles.bgcolorBlack : styles.bgColorWhite]}>
  render() {
    const q = this.state.currentQ
    return (
      <View style={styles.questionsPage}>
      <Navbar
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
           <TouchableOpacity style={styles.questionSubmit}>
             <Text style={styles.answerButtonText}>
               Skip
             </Text>
           </TouchableOpacity>

          <TouchableOpacity style={styles.questionSubmit}>
            <Text style={styles.answerButtonText}>
              Answer
            </Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }


}