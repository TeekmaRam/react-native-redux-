import React from 'react'
import {View, Text, StyleSheet, style} from 'react-native'

export default class Exitscreen extends React.Component{
   constructor(props){
       super(props);
   }

   

   render(){
       return(


           <View style={styles.container}>
               <Text style={styles.textedit}>Exitscreen</Text>
           </View>
       )
   }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f6d7a'
    },
    textedit: {
textAlign: 'center',
margin:20

    },
}) 
