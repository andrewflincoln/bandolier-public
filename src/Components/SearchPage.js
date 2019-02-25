import React from 'react'
import {Text, View, ImageBackground, TextInput, Picker, Modal, Image, TouchableOpacity, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles'
import PlayBar from './PlayBar'
import NavBar from './NavBar'
import SearchListRow from './SearchListRow'
import attachHeader from './Home'

const BASE_URL = `https://quiet-garden-92157.herokuapp.com`

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {   
      userId: 0,
      
      genre_1: '',
      instr_1: '',
      heroes: '',
      influences: '',

      other: 'Other',
      otherTarget: '',
      modalVisible: false,
      foundUsers: [],

      hideSearch: false,
      genre_other: false,
      instr_other: false
    }
  }


  componentDidMount() { //changed from Will for error fix
    this.setState({userId: this.props.navigation.getParam('userId')})
  }

  handleSubmit = () => {
    const searchUser = {...this.state} 

    axios.post(`${BASE_URL}/users/search`, searchUser)
    .then(response => {
        this.setState({foundUsers: response.data.rows, hideSearch: true})
    }) 
    .catch(() => console.log('failed to search'))
  }

  resetForm = () => {
    this.setState({genre_1: '', instr_1: '', heroes: '', influences: '', instr_other: false, genre_other: false})
  }

  goToProfile = (user) => {
    console.log('user passed: ' + JSON.stringify(user))
    this.props.navigation.navigate('ProfileDisplay', {viewUserId: user.id, barType: 'search', userId: this.state.userId})
  }

  navGen = (toScreen) => {
    this.props.navigation.navigate(toScreen, {userId: this.state.userId})
  }
  
 

  render() {
    console.log('userid on search ', this.state.userId)
    const {navigate} = this.props.navigation
    return (
      <ImageBackground source={require('../guitars/IMG_20190208_065638226_HDR.jpg')} style={styles.imgBG}>
        <View style={styles.searchBG}>
        <NavBar
          userId={this.state.userId}
          navGen={this.navGen}
          from='searchpage'
        />
      
        
        {this.state.hideSearch ? 
          <TouchableOpacity style={styles.searchModifyButton} onPress={() => this.setState({hideSearch: false})}>
            <Text style={styles.searchModifyText}>Search/Modify</Text>
          </TouchableOpacity>
        : 

          <View style={styles.searchView}> 

            <View style={styles.searchPickersRow}>
              

            {this.state.genre_other ? 
            <View style={styles.searchGenrePicker}>
            <Text style={styles.createHeaders}>Genre</Text>
            <TextInput
              value={this.state.genre_1}
              onChangeText={genre_1 => this.setState({genre_1})}
              style={styles.otherInput}></TextInput>
              </View>
            :

              <View>
                <Text style={styles.createHeaders}>Genres</Text>
                <Picker style={styles.searchGenrePicker}
                  selectedValue={this.state.genre_1}
                  onValueChange={(itemValue, itemIndex) => {
                    itemValue === 'Other' ? this.setState({genre_other: true})
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
                  <Picker.Item label='Other' value='Other' />
                </Picker>

              </View>

            }


            {this.state.instr_other ? 
              <View style={styles.searchGenrePicker}>
                <Text style={styles.createHeaders}>Instrument</Text>
                <TextInput
                  value={this.state.instr_1}
                  onChangeText={instr_1 => this.setState({instr_1})}
                  style={styles.otherInput}>
                </TextInput>
              </View>
            :

              <View>
               <Text style={styles.createHeaders}>Instruments</Text>
                <Picker style={styles.searchGenrePicker}
                  selectedValue={this.state.instr_1}
                  onValueChange={(itemValue, itemIndex) => {
                    itemValue === 'Other' ? this.setState({instr_other: true})
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
            </View>
            
    
            <View>
              <Text style={styles.createHeaders}>Heroes</Text>
              <TextInput multi-line={true}
                value={this.state.heroes}
                onChangeText={heroes => this.setState({heroes})}
                style={styles.createInput}></TextInput>

              <Text style={styles.createHeaders}>Influences</Text>
              <TextInput multi-line={true}
                value={this.state.influences}
                onChangeText={influences => this.setState({influences})}
                style={styles.createInput}></TextInput>


              <View style={styles.searchButtonsRow}>                  
                <TouchableOpacity style={styles.createSubmitButton} onPress={this.resetForm}>
                  <Text style={styles.answerButtonText}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createSubmitButton} onPress={this.handleSubmit}>
                  <Text style={styles.answerButtonText}>
                    Go
                  </Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
      }
          
{/* Results */}
          <ScrollView>
          <View style={styles.searchResultsView}> 
            
              {
                this.state.foundUsers.map(guy => 
                  <SearchListRow
                    key={guy.id}
                    user={guy}
                    goToProfile={this.goToProfile}
                  />
                )
              }
          
          </View>
          </ScrollView>





        </View>
      </ImageBackground>
    )//return
  }//render

}