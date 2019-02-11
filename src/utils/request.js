import axios from 'axios'
import {SecureStore} from 'expo'


const request = (path, method = 'get', body = null) => {
  console.log('request => storage')
  SecureStore.getItemAsync('token')
  .then( token => {
      console.log('result from storage: ' + JSON.stringify(token))


      axios(`https://quiet-garden-92157.herokuapp.com${path}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        data: body
      })
      // .then(response => console.log('axios response..... ' + JSON.stringify(response.data)))


//moving stuff from handle signin here to see if it resolves async/promise issue
      .then(response => {
        console.log('token response: ' + JSON.stringify(response.data))
        // this.setState({showError: false})
  
        SecureStore.setItemAsync('token', response.data.token)
        SecureStore.getItemAsync('token').then(testresult => { (console.log('token stored as ' + testresult )) })  //check
        // return request('/login') 
  
      })
      .then( () => {
        // this.props.setAuthentication(response.data.id) - for redux
       console.log('can i navigate here')
        navigate('UserProfile') ///used history here
      })
      .catch(error => {
        console.log('caught after navigate')
        this.setState({ showError: true })
      })
//////////////////



  })
.catch(console.log('caught end of request'))



}




export default request