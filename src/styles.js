import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileBG: {
    backgroundColor: '#85E59A',
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
    backgroundColor: '#85E59A',
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




  profileInner: {
    alignSelf: 'center',
    backgroundColor: '#FFE4A0',
    width: '90%',
    marginTop: 40,
    borderRadius: 15,
    padding: 20,
  },
  profilePic: {
    height: 175,
  },
  profileTextBody: {

  },
  profileTextSectionHead: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  },
  profileTextName:{
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold'
  },
  profileTextDeal: {
    // fontSize: 19,
    marginBottom: 2,
    fontWeight: 'bold',

  },
  genreInstrSection: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  instrCol: {
    marginLeft: 20
  },


  playBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }


});

export default styles
