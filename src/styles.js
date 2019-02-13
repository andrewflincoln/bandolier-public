import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileBG: {
    backgroundColor: '#8EE8B9',
    height: '100%',
    opacity: 0.7

  }, 
  imgBG: {
    width: '100%',
  },



 
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
    height: '100%'
  },


  //UserCard
  profileInner: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    // height: '100%'
  },
  profilePic: {
    height: 175,
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
    // marginTop: 2
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
    height: '100%'
  },
  playlistRow: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: 5,
    marginLeft: 5,
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
  questionCard: {
    alignSelf: 'center',
    backgroundColor: '#FFF9CC',
    width: '90%',
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
  }





});

export default styles
