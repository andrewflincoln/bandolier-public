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
      g_1_other: false,
      g_2_other: false,
      g_3_other: false,

      bio: '',
      img_url: '',
      heroes: '',
      influences: '',
      instr_1: '',
      instr_2: '',
      instr_3: '',
      i_1_other: false,
      i_2_other: false,
      i_3_other: false,
      other: 'Other',
      otherTarget: '',
      newThing: '',

      pageStatus: 'create',
      userToUpdate: {}
    }
  }


  componentWillMount() {
    if (this.props.navigation.getParam('pageStatus') === 'update') {
      this.setState({pageStatus: 'update', userToUpdate: this.props.navigation.getParam('user')})
    }
  }

  componentDidMount() {
    // this.setState({deal: this.state.userToUpdate.deal})
    this.setState({...this.state.userToUpdate})
  }

  handleSubmit = () => {
    const newUser = {...this.state}
    console.log(newUser)

    axios.post(`${BASE_URL}/users`, newUser)
    .then(response => {
      console.log(JSON.stringify(response))
        this.props.navigation.navigate('Home', {userId: response.data.id})
    }) 
    .catch(() => console.log('failed to create'))
  }

  handleUpdate = () => {
    const updatedUser = {...this.state}
    console.log(updatedUser)

    axios.put(`${BASE_URL}/users`, updatedUser)
    .then(response => {
      console.log(JSON.stringify(response))
        this.props.navigation.navigate('MyProfile', {userId: response.data.id})
    }) 
    .catch(() => console.log('failed to update'))
  }


  render() {
    console.log('user at render ', this.state.userToUpdate)
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065638226_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.createBG}>
     
          <ScrollView style={styles.userCardScroll}>

            <View style={styles.createView}> 

            {this.state.pageStatus === 'create' ? 
              <View>
                <Text style={styles.createHeaders}>Email</Text>
                  <TextInput placeHolder='Email' 
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                  style={styles.createInput}></TextInput>

                <Text style={styles.createHeaders}>Password</Text>
                  <TextInput placeHolder='Password' 
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                  style={styles.createInput}></TextInput>

                <Text style={styles.createHeaders}>Username</Text>
                <TextInput placeHolder='Username' 
                  value={this.state.username}
                  onChangeText={username => this.setState({username})}
                  style={styles.createInput}></TextInput>
              </View>
            : null
            }

              <Text style={styles.createHeaders}>Profile Pic</Text>
              <Text>Let's just do a url for now</Text>
              <TextInput placeHolder='Profile pic' 
                value={this.state.img_url}
                onChangeText={img_url => this.setState({img_url})}
                style={styles.createInput}></TextInput>


                <View style={styles.genreInstrPickerView}>
                {/* All pickers */}
                  <View>
                  {/* genre pickers */}
                  <Text style={styles.createHeaders}>Genre</Text>
                    {this.state.g_1_other ? 
                    // other
                    <View style={styles.searchGenrePicker}>
                    
                    <TextInput
                      value={this.state.genre_1}
                      onChangeText={genre_1 => this.setState({genre_1})}
                      style={styles.otherInput}></TextInput>
                    </View>  

                    :
                    <View>  
                    {/* Picker 1 */}
                    
                      {/* <Text style={styles.createHeaders}>Genres</Text> */}
                  
                      <Picker style={styles.genrePicker}
                        selectedValue={this.state.genre_1}
                        onValueChange={(itemValue, itemIndex) => {
                          itemValue == 'Other' ? 
                        
                          this.setState({g_1_other: true})  
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
                    </View>
 
                    }


                    {this.state.g_2_other ? 
                    // other
                    <View style={styles.searchGenrePicker}>
            
                    <TextInput
                      value={this.state.genre_2}
                      onChangeText={genre_2 => this.setState({genre_2})}
                      style={styles.otherInput}></TextInput>
                    </View>  
                    
                    
                    
                    :
                    <View>  
                    {/* Picker 2 */}
                    
                  
                  
                      <Picker style={styles.genrePicker}
                        selectedValue={this.state.genre_2}
                        onValueChange={(itemValue, itemIndex) => {
                          itemValue == 'Other' ? 
                        
                          this.setState({g_2_other: true})  
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
                    </View>
 
                  }
                                      
                  {this.state.g_3_other ? 
                  // other
                  <View style={styles.searchGenrePicker}>

                  <TextInput
                    value={this.state.genre_3}
                    onChangeText={genre_3 => this.setState({genre_3})}
                    style={styles.otherInput}></TextInput>
                  </View>  
                  
  
  
                  :
                  <View>  
                  {/* Picker 3 */}
                  
                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.genre_3}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue == 'Other' ? 
                      
                        this.setState({g_3_other: true})  
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

                  }
                  </View>
                  {/* /genre pickers */}


                  <View>
                  {/* genre pickers */}
                  <Text style={styles.createHeaders}>Instruments</Text>
                    {this.state.i_1_other ? 
                    // other
                    <View style={styles.searchGenrePicker}>
                    
                    <TextInput
                      value={this.state.genre_1}
                      onChangeText={instr_1 => this.setState({instr_1})}
                      style={styles.otherInput}></TextInput>
                    </View>  
                    
                    :
                    <View>  
                    {/* I Picker 1 */}
                    
                      <Picker style={styles.genrePicker}
                        selectedValue={this.state.instr_1}
                        onValueChange={(itemValue, itemIndex) => {
                          itemValue == 'Other' ? 
                        
                          this.setState({i_1_other: true})  
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
                        <Picker.Item label="Other" value="Other"/>
                      </Picker>
                    </View>
 
                    }


                    {this.state.i_2_other ? 
                    // other 2
                    <View style={styles.searchGenrePicker}>
            
                    <TextInput
                      value={this.state.instr_2}
                      onChangeText={instr_2 => this.setState({instr_2})}
                      style={styles.otherInput}></TextInput>
                    </View>  
                    
                    :
                    <View>  
                    {/* I Picker 2 */}
                    
                  
                  
                      <Picker style={styles.genrePicker}
                        selectedValue={this.state.instr_2}
                        onValueChange={(itemValue, itemIndex) => {
                          itemValue == 'Other' ? 
                        
                          this.setState({i_2_other: true})  
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
                        <Picker.Item label="Other" value="Other"/>
                      </Picker>
                    </View>
 
                  }
                                      
                  {this.state.i_3_other ? 
                  // other 3
                  <View style={styles.searchGenrePicker}>

                  <TextInput
                    value={this.state.instr_3}
                    onChangeText={instr_3 => this.setState({instr_3})}
                    style={styles.otherInput}></TextInput>
                  </View>  
                  
  
  
                  :
                  <View>  
                  {/* Picker 3 */}
                  
                    

                    <Picker style={styles.genrePicker}
                      selectedValue={this.state.instr_3}
                      onValueChange={(itemValue, itemIndex) => {
                        itemValue == 'Other' ? 
                      
                        this.setState({i_3_other: true})  
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
                      <Picker.Item label="Other" value="Other"/>
                    </Picker>
                  </View>

                  }
                  </View>
                  {/* /genre pickers */}
                  
                </View>




              <Text style={styles.createHeaders}>Your Deal</Text>
              <Text>What's your deal? Briefly, who are you and what are you looking for?</Text> 
              <TextInput multiline={true} placeHolder='My deal? Lemme think...'
                maxLength={200}
                value={this.state.deal}
                onChangeText={deal => this.setState({deal})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Bio</Text>
              <Text>Go more in-depth here if you like.</Text>
              <TextInput multiline={true} placeHolder='My story begins in nineteen-dickety-two...' 
                value={this.state.bio}
                onChangeText={bio => this.setState({bio})}
                style={styles.createInput}>
              </TextInput>

              <Text style={styles.createHeaders}>Heroes</Text>
              <Text>A few individuals who particulary informed the way you play/sing.</Text> 
              <TextInput multiline={false} placeHolder='Heroes' 
                value={this.state.heroes}
                onChangeText={heroes => this.setState({heroes})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Influences</Text>
              <TextInput multiline={true} placeHolder='Influences' 
                value={this.state.influences}
                onChangeText={influences => this.setState({influences})}
                style={styles.createInput}></TextInput>


              {this.state.pageStatus === 'create' ? 
              <TouchableOpacity style={styles.createSubmitButton} onPress={this.handleSubmit}>
                <Text style={styles.answerButtonText}>
                  Go
                </Text>
              </TouchableOpacity>
              : 
              <TouchableOpacity style={styles.createSubmitButton} onPress={this.handleUpdate}>
                <Text style={styles.answerButtonText}>
                  Update
                </Text>
              </TouchableOpacity>
              }



            </View>


    



          
          </ScrollView>
      

        </View>
      </ImageBackground>
    )//return
  }//render

}






//modal for "other" options

// <Modal
// style={styles.otherModal}
// animationType="slide"
// transparent={true}
// visible={this.state.modalVisible}
// onRequestClose={() => {
// Alert.alert('Modal has been closed.');
// }}>
// <View style={styles.modalView}>
// <View>
// <Text style={styles.createHeaders}>Other Genre:</Text>

// <TextInput placeHolder='My Genre' 
// // value={this.state.other}
// onChangeText={other => this.setState({other})}
// style={styles.createInput}></TextInput>


// <TouchableOpacity
// onPress={() => {
// console.log('target for switch: ' + this.state.otherTarget + '  other ' + this.state.other)
// // this.setState({modalVisible: !this.state.modalVisible})

// switch(this.state.otherTarget) {

// case 'genre_1': 
// console.log('it is 1')
// this.setState({genre_1: this.state.other, modalVisible: !this.state.modalVisible})
// console.log('genre 1: ' + this.state.genre_1)
// break;
// case 'genre_2': 
// this.setState({genre_2: this.state.other})
// case 'genre_3': 
// this.setState({genre_3: this.state.other})

// case 'instr_1': 
// this.setState({instr_1: this.state.other})
// case 'instr_2': 
// this.setState({instr_2: this.state.other})
// case 'instr_3': 
// this.setState({instr_3: this.state.other})
// case '': console.log('it is blank!')
// default: console.log('defaulted')

// }
// // this.setState({other: 'Other'})
// }}>
// <Text>Add</Text>
// </TouchableOpacity>
// </View>
// </View>
// </Modal>