import React from 'react'
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import styles from '../styles'
import axios from 'axios'
import NavBar from './NavBar'
import attachHeader from './Home'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userId: 0,
      currentQ: {},
      answer: 0,
    }
  }

  componentWillMount() {
    this.setState({userId: this.props.navigation.getParam('userId')})
    this.getNextQuestion()
  }

  getNextQuestion = () =>  { //sometimes getting a 304 error here (but not on Postman)
    axios.get(`${BASE_URL}/questions/next/${this.state.userId}`, attachHeader() )
    .then(response => {
        this.setState({currentQ: response.data})
    })
    .then(() => this.setState({answer: 0}))
    
    .catch(() => console.log('failed to get next q'))
  }

  submitAnswer = () => { //this works flawlessly, including the invocation of the above function
    axios.post(`${BASE_URL}/questions`, {userId: this.state.userId, questionId: this.state.currentQ.id, answer: this.state.answer}, attachHeader())
    .then(this.getNextQuestion())
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }
  


  render() {
    console.log('userid qs: '+ this.state.userId)
    const q = this.state.currentQ
    return (

      <ImageBackground source={require(`../guitars/IMG_20190208_070255309_HDR.jpg`)} style={styles.imgBG} >
      <View style={styles.questionsPage}>

      <NavBar
        userId={this.state.userId}
        navGen={this.navGen}
        from='questions'

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
      </ImageBackground>
    )
  }


}