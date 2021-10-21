import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import EmployeeSignIn from './screens/EmployeeSignIn'
import Userhome from './screens/Userhome'
import WelcomeScreen from './screens/WelcomeScreen'
import UserMenu from './screens/UserMenu'
export default class App extends React.Component{
  render(){
    return(
      <View>
<AppContainer/>
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
EmployeeSignIn:{screen:EmployeeSignIn},
Userhome:{screen:Userhome},
UserMenu:{screen:UserMenu}
})
const AppContainer = createAppContainer(AppNavigator)