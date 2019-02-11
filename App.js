
import UserProfile from './src/Components/UserProfile'
import Login from './src/Components/Login'

//don't forget to import that file you just made, conveniently right here

import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';



const MainNavigator = createStackNavigator(
{  
    Login: {screen: Login},
    UserProfile: {screen: UserProfile},
},
{
  initialRouteName: 'Login', //change once Home is built
  defaultNavigationOptions: {
    header: null,
  }
}
)

const App = createAppContainer(MainNavigator)

export default App


