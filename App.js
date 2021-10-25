import React, { useEffect } from 'react'
import { View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux'
import CountryName from './Mainpage/Countryname'
import Store from './ReduxReducer/Stores'


const App = () => {

 useEffect(() => {
  SplashScreen.hide();
 }, [])


  return (
 <Provider store={Store}>
      <CountryName />
</Provider> 
     
  )}
export default App;
