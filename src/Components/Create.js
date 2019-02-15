import React from 'react'
import {Text, View, ImageBackground, TextInput, Picker, Image, TouchableOpacity, ScrollView} from 'react-native'
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
    }
  }


  handleSubmit = () => {
    const newUser = {...this.state}

    axios.post(`${BASE_URL}/users`, newUser)
    // axios.post(`${BASE_URL}/users, {${this.state.username}, ${this.state.email}, ${this.state.password},
    //   ${this.state.deal}, ${this.state.genre_1}, ${this.state.genre_2}, ${this.state.genre_3}, 
    //   ${this.state.bio}, ${this.state.heroes}, ${this.state.influences}, 
    //   ${this.state.instr_1}, ${this.state.instr_2}, ${this.state.instr_3}
    // }`)
    // axios.post(`${BASE_URL}/users`, { this.state.email, this.state.password,
    //   this.state.deal, this.state.genre_1, this.state.genre_2, this.state.genre_3, 
    //   this.state.bio, this.state.heroes, this.state.influences, 
    //   this.state.instr_1, this.state.instr_2, this.state.instr_3 }
    // })
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
                    <Text style={styles.createHeaders}>Genres</Text>
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_1}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({genre_1: itemValue})
                      }>
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
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_2}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({genre_2: itemValue})
                      }>
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
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_3}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({genre_3: itemValue})
                      }>
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
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </View>

                  <View>
                    <Text style={styles.createHeaders}>Instruments</Text>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_1}  
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({instr_1: itemValue})
                      }>
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_2}  
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({instr_2: itemValue})
                      }>
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <Picker style={styles.instrPicker}
                      selectedValue={this.state.instr_3}  
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({instr_3: itemValue})
                      }>
                      <Picker.Item label="Guitar" value="Guitar" />
                      <Picker.Item label="Vocals" value="Vocals" />
                      <Picker.Item label="Bass" value="Bass" />
                      <Picker.Item label="Drums" value="Drums" />
                      <Picker.Item label="Keys" value="Keys" />
                      <Picker.Item label="Synths" value="Synths" />
                      <Picker.Item label="DJ/Production" value="DJ/Production" />
                      <Picker.Item label="Horns" value="Horns" />
                      <Picker.Item label="Vocals (Backing Only)" value="Vocals (Backing Only)" />
                      <Picker.Item label="Other" value="Other" />
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