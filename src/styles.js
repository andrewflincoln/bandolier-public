import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({



 
  loginImgBG: {
    width: '100%',
    zIndex: 1,
    opacity: .9
  },
  loginBG: {
    justifyContent: 'center',
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.9,
    zIndex: 1

  }, 
  loginForm: {
    
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#FFE4A0',
    borderRadius: 15,
    padding: 10,
    zIndex: 2,
    opacity: 1,
  },
  loginFormText: {
   
    fontSize: 20,
  
  },
  loginHeader: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 10
  },
  userCardScroll: {
    height: '100%',
    marginTop: 6,
  },

  profileBG: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.8

  }, 
  imgBG: {
    width: '100%',
  },


  //UserCard
  profileInner: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    // marginTop: 200,
    borderRadius: 10,
    padding: 15,
    // height: '100%'
  },
  profilePic: {
    height: 175,
  },
  nameMatchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileTextBody: {
    
  },
  profileTextName:{
    fontSize: 23,
    marginTop: 1,
    fontWeight: 'bold',
  },
  profileTextSectionHead: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2
  },
  profileTextDeal: {
    // fontSize: 18,
    marginBottom: 2,
  },
  genreInstrSection: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  instrCol: {
    marginLeft: 20
  },


  playBar: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 10
  }, 

  navBar: {
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'flex-end',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  },
  navBarFont: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 8
  },

  playlistView: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.7
  },
  playlistRow: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: 5,
    marginLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFF9CC',
    // backgroundColor: 'white',
    borderRadius: 10
   
  },  
  rowPic: {
    width: '25%',
    borderRadius: 10,
    marginRight: 5,
  },  
  rowTextBox: {
    flex: 1,
    flexDirection: 'column'
  },
  rowTextName: {
    fontWeight: 'bold'
  },

  //Questions
  questionsPage: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.85
  },
  questionCard: {
    alignSelf: 'center',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    width: '90%',
    marginTop: 80,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
  },
  questionText: {
    fontSize: 20
  },
  optionCard: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    // backgroundColor: 'white',
    width: '90%',
    marginTop: 5,
    borderRadius: 8,
    padding: 15,
  },
  selectedAnswer: {
    alignSelf: 'center',
    backgroundColor: '#FFAF99',
    // backgroundColor: '#C4EDFF',
    width: '93%',
    marginTop: 5,
    borderRadius: 8,
    padding: 16,
  },
  questionSubmitView: {
    marginTop: 12,
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
 
  },
  questionSubmit: {
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    width: '35%',
    borderRadius: 8,
    padding: 10,
    marginLeft: 5,
    backgroundColor: 'gray'
  },
  answerButtonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },  
  profileInner: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    // height: '100%'
  },

  //Create User
  createBG: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.67
  },
  createView: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    marginTop: 40,
    borderRadius: 10,
    padding: 15,
    // height: '100%'
  },
  createHeaders: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 8
  },
  createInput: {
    backgroundColor: 'white',
    marginBottom: 8

  },
  genreInstrPickerView: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  genrePicker: {
    height: 50, 
    width: 150
  },
  instrPicker: {
    height: 50, 
    width: 150
  },
  createSubmitButton: {
    alignSelf: 'flex-end',
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    width: '35%',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    marginLeft: 8,
    backgroundColor: 'gray'
  },
  otherModal: {
    backgroundColor: 'gray',
    width: '50%'
  },
  modalView: {
    alignSelf: 'center',
    backgroundColor: '#FFAF99',
    width: '90%',
    marginTop: 140,
    borderRadius: 10,
    padding: 15,
    
  },

  //SearchPage
  searchBG: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.75

  },
  searchView: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    // height: '100%'
  },
  searchPickersRow: {
    flexDirection: 'row'
  },
  searchGenrePicker: {   //combine if these end up the same
    height: 50, 
    width: 150
  },
  searchGenrePicker: {
    height: 50, 
    width: 150,
    marginBottom: 20
  },
  searchResultsView: {
    width: '90%',
    alignSelf: 'center'
  },
  searchListRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 80,
    width: '100%',
    marginTop: 5,

    backgroundColor: '#FFF9CC',
    // backgroundColor: 'white',
    borderRadius: 10
   
  },  
  searchButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  searchGoButton: {
    marginLeft: 8
  },
  searchModifyButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    width: '45%',
    borderRadius: 8,
    padding: 10,
    marginLeft: 5,
    marginRight: 20,
    marginTop: 5,
    backgroundColor: 'gray'
  },
  searchModifyText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },
  otherInput: {
    backgroundColor: 'white',
    marginBottom: 8,
    marginTop: 9,
    width: '90%',
    alignSelf: 'flex-start'

  },


  //Contact
  convoRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 65,
    width: '98%',
    marginTop: 10,

    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    borderRadius: 30
   
  },  
  convoRowPic: {
    width: '25%',
    borderRadius: 30,
    marginRight: 5,
  },  
  // messageScroll: {
  //   height: 250
  // },
  // messageScrollKEY: {
  //   height: 150,
  
  // },
  messagesViewNoKeys: {
   

  },
  messagesViewKeys: {
    height: 250
  },
  messageRowLeft: {
    // flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 65,
    width: '85%',
    marginTop: 10,
    justifyContent: 'center',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,

  }, 
  messageRowRight: {
    // flexDirection: 'row',
    alignSelf: 'flex-end',
    minHeight: 65,
    width: '85%',
    marginTop: 10,
    justifyContent: 'center',
    // backgroundColor: '#FFF9CC',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
  
  }, 
  messageFont: {
    fontSize: 18
  },
  inputSendRow: {
    flexDirection: 'row'
  },  
  messageInput: {
    fontSize: 18,
    alignSelf: 'flex-end',
    minHeight: 65,
    marginTop: 10,
    width: '70%',
    justifyContent: 'center',
    backgroundColor: '#FFF9CC',
    // backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
  },
  messageSubmit: {

  }



});

export default styles
