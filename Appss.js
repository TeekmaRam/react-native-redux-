import React, { useEffect } from 'react'
import { View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerHome from './Api/NewDrawerscreen'
import Exitscreen from './Api/ExitScreen'
import Layoutpage from './Api/Layoutpage'
import Countryshareborder from './Api/Contryshareborder'
import { Provider } from 'react-redux'
import CountryName from './Newfolder/Countryname'
import Store from './ReduxReducer/Stores'





const Appss = () => {

 useEffect(() => {
  SplashScreen.hide();
 }, [])

 


 

  return (
  
 <Provider store={Store}>
      <CountryName />
</Provider> 
   
//<View>< CountryName /></View>
     
  );
  
}



export default Appss;
