import React from 'react'
import {Text, View, ImageBackground, TextInput, Picker, Modal, Image, TouchableOpacity, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import PlayBar from './PlayBar'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',      
      deal: '',
      genre_1: '',
      genre_2: '',
      genre_3: '',
      bio: '',
      img_url: '',
      heroes: '',
      influences: '',
      instr_1: '',
      instr_2: '',
      instr_3: '',
      other: 'Other',
      otherTarget: '',
      newThing: '',
      modalVisible: false
    }
  }


  handleSubmit = () => {
    const newUser = {...this.state}

    axios.post(`${BASE_URL}/users`, newUser)
    .then(response => {
        this.props.navigation.navigate('Home')
    }) 
    .catch(() => console.log('failed to create'))
  }



  render() {
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065638226_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.createBG}>
     
          <ScrollView style={styles.userCardScroll}>

            <View style={styles.createView}> 

              <Text style={styles.createHeaders}>Email</Text>
                <TextInput placeHolder='Email' 
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Password</Text>
                <TextInput placeHolder='Password' 
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Username</Text>
              <TextInput placeHolder='Username' 
                value={this.state.username}
                onChangeText={username => this.setState({username})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Profile Pic</Text>
              <Text>Let's just do a url for now</Text>
              <TextInput placeHolder='Profile pic' 
                value={this.state.img_url}
                onChangeText={img_url => this.setState({img_url})}
                style={styles.createInput}></TextInput>


                <View style={styles.genreInstrPickerView}>

                  <View>



                  <Modal
                          style={styles.otherModal}
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                <View style={styles.modalView}>
                  <View>
                    <Text style={styles.createHeaders}>Other Genre:</Text>

                    <TextInput placeHolder='My Genre' 
                      // value={this.state.other}
                      onChangeText={other => this.setState({other})}
                      style={styles.createInput}></TextInput>


              <TouchableOpacity
                onPress={() => {
                  console.log('target for switch: ' + this.state.otherTarget + '  other ' + this.state.other)
                  // this.setState({modalVisible: !this.state.modalVisible})

                  switch(this.state.otherTarget) {

                    case 'genre_1': 
                    console.log('it is 1')
                      this.setState({genre_1: this.state.other, modalVisible: !this.state.modalVisible})
                      console.log('genre 1: ' + this.state.genre_1)
                      break;
                    case 'genre_2': 
                      this.setState({genre_2: this.state.other})
                    case 'genre_3': 
                      this.setState({genre_3: this.state.other})

                    case 'instr_1': 
                      this.setState({instr_1: this.state.other})
                    case 'instr_2': 
                      this.setState({instr_2: this.state.other})
                    case 'instr_3': 
                      this.setState({instr_3: this.state.other})
                    case '': console.log('it is blank!')
                    default: console.log('defaulted')

                  }
                  // this.setState({other: 'Other'})
                }}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>



                    <Text style={styles.createHeaders}>Genres</Text>
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_1}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue == 'Other' ? 
                       
                        this.setState({modalVisible: true, otherTarget: 'genre_1'})  
                        :
                        this.setState({genre_1: itemValue})
                      }
                      }>
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Rock" value="Rock" />
                      <Picker.Item label="Alt" value="Alt" />
                      <Picker.Item label="Indie" value="Indie" />
                      <Picker.Item label="Metal" value="Metal" />
                      <Picker.Item label="Punk" value="Punk" />
                      <Picker.Item label="Folk" value="Folk" />
                      <Picker.Item label="Blues" value="Blues" />
                      <Picker.Item label="Electronic" value="Electronic" />
                      <Picker.Item label="Synthpop" value="Synthpop" />
                      <Picker.Item label="Noise" value="Noise" />
                      <Picker.Item label="Shoegaze" value="Shoegaze" />
                      <Picker.Item label="Experimental" value="Experimental" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>

                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_2}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue === 'Other' ? 
                        this.setState({modalVisible: true, genre_2: itemValue, otherTarget: 'genre_2'})
                        :
                        this.setState({genre_2: itemValue})
                      }
                    }>
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Rock" value="Rock" />
                      <Picker.Item label="Alt" value="Alt" />
                      <Picker.Item label="Indie" value="Indie" />
                      <Picker.Item label="Metal" value="Metal" />
                      <Picker.Item label="Punk" value="Punk" />
                      <Picker.Item label="Folk" value="Folk" />
                      <Picker.Item label="Blues" value="Blues" />
                      <Picker.Item label="Electronic" value="Electronic" />
                      <Picker.Item label="Synthpop" value="Synthpop" />
                      <Picker.Item label="Noise" value="Noise" />
                      <Picker.Item label="Shoegaze" value="Shoegaze" />
                      <Picker.Item label="Experimental" value="Experimental" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_3}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue === 'Other' ? 
                        this.setState({modalVisible: true, genre_3: itemValue, otherTarget: 'genre_3'})
                        :
                        this.setState({genre_3: itemValue})
                      }
                    }>
                      
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Rock" value="Rock" />
                      <Picker.Item label="Alt" value="Alt" />
                      <Picker.Item label="Indie" value="Indie" />
                      <Picker.Item label="Metal" value="Metal" />
                      <Picker.Item label="Punk" value="Punk" />
                      <Picker.Item label="Folk" value="Folk" />
                      <Picker.Item label="Blues" value="Blues" />
                      <Picker.Item label="Electronic" value="Electronic" />
                      <Picker.Item label="Synthpop" value="Synthpop" />
                      <Picker.Item label="Noise" value="Noise" />
                      <Picker.Item label="Shoegaze" value="Shoegaze" />
                      <Picker.Item label="Experimental" value="Experimental" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>
                  </View>

                  <View>
                    <Text style={styles.createHeaders}>Instruments</Text>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_1}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue === 'Other' ? 
                        this.setState({modalVisible: true, instr_1: itemValue, otherTarget: 'instr_1'})
                        :
                        this.setState({instr_1: itemValue})
                      }
                    }>
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_2}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue === 'Other' ? 
                        this.setState({modalVisible: true, instr_2: itemValue, otherTarget: 'instr_2'})
                        :
                        this.setState({instr_2: itemValue})
                      }
                    }>
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_3}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue === 'Other' ? 
                        this.setState({modalVisible: true, instr_3: itemValue, otherTarget: 'instr_3'})
                        :
                        this.setState({instr_3: itemValue})
                      }
                    }>
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label={this.state.other} value={this.state.other} />
                    </Picker>
                  </View>
                  
                </View>




              <Text style={styles.createHeaders}>Your Deal</Text>
              <Text>What's your deal? Briefly, who are you and what are you looking for?</Text> 
              <TextInput multi-line={true} placeHolder='My deal? Lemme think...'
                value={this.state.deal}
                onChangeText={deal => this.setState({deal})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Bio</Text>
              <Text>Go more in-depth here if you like.</Text>
              <TextInput multi-line={true} placeHolder='My story begins in nineteen-dickety-two...' 
                value={this.state.bio}
                onChangeText={bio => this.setState({bio})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Heroes</Text>
              <Text>A few individuals who particulary informed the way you play/sing.</Text> 
              <TextInput multi-line={true} placeHolder='Heroes' 
                value={this.state.heroes}
                onChangeText={heroes => this.setState({heroes})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Influences</Text>
              <TextInput multi-line={true} placeHolder='Influences' 
                value={this.state.influences}
                onChangeText={influences => this.setState({influences})}
                style={styles.createInput}></TextInput>


              <TouchableOpacity style={styles.createSubmitButton} onPress={this.handleSubmit}>
                <Text style={styles.answerButtonText}>
                  Go
                </Text>
              </TouchableOpacity>
            </View>


    



          
          </ScrollView>
      

        </View>
      </ImageBackground>
    )//return
  }//render

}