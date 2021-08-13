import React, { useEffect } from 'react'
import { View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerHome from './Api/NewDrawerscreen'
import Exitscreen from './Api/ExitScreen'
import Layoutpage from './Api/Layoutpage'
import Countryshareborder from './Api/Contryshareborder'


const App = () => {

 useEffect(() => {
  SplashScreen.hide();
 }, [])

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
  
const Appdrawer = () => {
  return(
  <Drawer.Navigator>
<Drawer.Screen name = 'Home' component={DrawerHome} />
<Drawer.Screen name = 'Exit' component={Exitscreen} />
  </Drawer.Navigator>
  )
}




const StackNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="Home" headerMode='none'>
      <Stack.Screen name='Appdrawer' component={Appdrawer} />
      <Stack.Screen name='Layoutpage' component={Layoutpage} />
      <Stack.Screen name='Countryshareborder' component={Countryshareborder} />
    </Stack.Navigator>
  )
}

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
     
  );
  
}



export default App;
