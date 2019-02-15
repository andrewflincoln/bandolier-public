
import Home from './src/Components/Home'
import Login from './src/Components/Login'
import Playlist from './src/Components/Playlist'
import NavBar from './src/Components/NavBar'
import Questions from './src/Components/Questions'
import Create from './src/Components/Create'



import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';

const MainNavigator = createStackNavigator(
{  
    Login: {screen: Login},
    Home: {screen: Home},
    Playlist: {screen: Playlist},
    NavBar: {screen: NavBar},
    Questions: {screen: Questions},
    Create: {screen: Create}
},
{
  initialRouteName: 'Create', //change
  defaultNavigationOptions: {
    header: null,
  }
}
)

const App = createAppContainer(MainNavigator)

export default App


