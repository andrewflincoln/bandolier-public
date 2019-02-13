
import UserProfile from './src/Components/UserProfile'
import Login from './src/Components/Login'
import Playlist from './src/Components/Playlist'
import NavBar from './src/Components/NavBar'
import Questions from './src/Components/Questions'

//don't forget to import that file you just made, conveniently right here

import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';



const MainNavigator = createStackNavigator(
{  
    Login: {screen: Login},
    UserProfile: {screen: UserProfile},
    Playlist: {screen: Playlist},
    NavBar: {screen: NavBar},
    Questions: {screen: Questions}
},
{
  initialRouteName: 'Questions', //change
  defaultNavigationOptions: {
    header: null,
  }
}
)

const App = createAppContainer(MainNavigator)

export default App


