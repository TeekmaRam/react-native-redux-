import React, { useEffect } from 'react'
import { View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Newapi from './Api/NewDrawerscreen'
import Exitscreen from './Api/Exitscreen'
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
<Drawer.Screen name = 'Homename' component={Newapi} />
<Drawer.Screen name = 'exit' component={Exitscreen} />
  </Drawer.Navigator>
  )
}




const Newnavi = () => {
  return(
    <Stack.Navigator initialRouteName="Home" headerMode='none'>
      <Stack.Screen name='kriss' component={Appdrawer} />
      <Stack.Screen name='Layoutpage' component={Layoutpage} />
      <Stack.Screen name='Countryshareborder' component={Countryshareborder} />
    </Stack.Navigator>
  )
}

  return (
    <NavigationContainer>
      <Newnavi />
    </NavigationContainer>
     
  );
  
}



export default App;
