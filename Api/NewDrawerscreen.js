import React from 'react'
import {View, Text, StyleSheet, style, Button, TouchableOpacity, ScrollView} from 'react-native'
import {Layoutpage} from './Layoutpage'
import { NavigationContainer } from '@react-navigation/native';

export default class DrawerHome extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        region : []
       }
   }


componentDidMount(){
    this.Newapifetch();
}

Newapifetch = async() => {
var newavatar = {
method: 'GET',
redirect: 'follow'

}
  const response =  await fetch('https://restcountries.eu/rest/v2/all', newavatar)
    .then((response) => response.json())
    .then(result => {
        this.setState({region: result})
    }).catch((error) => {
        console.log('Error',error)
    } )
}
   

   render(){
       return(


           <ScrollView style={styles.container}>      
               { 
                    this.state.region.map((callname, key) => (
                        <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Layoutpage', {regionName: callname.region})}>
                        <Text style={styles.callname} key={key}>{callname.region}</Text>
                        
                        </TouchableOpacity>
                        
                         ))
 
                }
     
           </ScrollView>
       )
   }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    
    

    callname: {
        textAlign: 'center',
        fontSize: 50,
        color:'#4f6d7a'
    }
}) 
