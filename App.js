import Home from './src/Components/Home'
import UserProfile from './src/Components/UserProfile'
import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';



const MainNavigator = createStackNavigator(
{  
    Home: {screen: Home},
    UserProfile: {screen: UserProfile},
},
{
  initialRouteName: 'UserProfile', //change once Home is built
  defaultNavigationOptions: {
    header: null,
  }
}
)

const App = createAppContainer(MainNavigator)

export default App