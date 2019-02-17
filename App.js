
import Home from './src/Components/Home'
import Login from './src/Components/Login'
import Playlist from './src/Components/Playlist'
import NavBar from './src/Components/NavBar'
import Questions from './src/Components/Questions'
import Create from './src/Components/Create'
import SearchPage from './src/Components/SearchPage'



import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';

const MainNavigator = createStackNavigator(
{  
    Login: {screen: Login},
    Home: {screen: Home},
    Playlist: {screen: Playlist},
    NavBar: {screen: NavBar},
    Questions: {screen: Questions},
    Create: {screen: Create},
    SearchPage: {screen: SearchPage}
},
{
  initialRouteName: 'SearchPage', //change
  defaultNavigationOptions: {
    header: null,
  }
}
)



const App = createAppContainer(MainNavigator)

export default App


