import {connect, Provider} from 'react-redux'
import UserProfile from './src/Components/UserProfile'
import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';



const MainNavigator = createStackNavigator(
{  
    
    UserProfile: {screen: UserProfile},
},
{
  initialRouteName: 'UserProfile', //change once Home is built
  // defaultNavigationOptions: {
  //   header: null,
  // }
}
)

const App = createAppContainer(MainNavigator)


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    user}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)