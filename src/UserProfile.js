import React from 'react'
import {styleSheet, Text, View} from 'react-native'


export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      currentUser= {}
    }
  }
  
  componentWillMount() {
    this.props.getUser(1) //change with auth
  }

  render() {
    return (
      <View>
        <Text>hey</Text>
      </View>
    )
  }


}