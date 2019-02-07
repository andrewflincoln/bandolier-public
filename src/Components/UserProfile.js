import React from 'react'
import {Text, View} from 'react-native'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {getUser} from '../actions/users'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      currentUser: {}
    }
  }
  
  componentWillMount() {
    console.log('will mount')
    getUser(1) //change with auth
  }

  render() {
    console.log('i wanna render')
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>heyasdffasdfasdfweqtqwetqrehqeeeeeeeeeeeeeeeatgrshytwrhwergerqtgearwywerhweryhewgyrewsgerwyweryeryw</Text>
      </View>
    )
  }


}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    user}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)