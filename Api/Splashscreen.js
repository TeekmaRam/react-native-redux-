import React from 'react'
import {View, Text, StyleSheet, style} from 'react-native'


class Newapi extends React.Component{
   constructor(props){
       super(props);
   }

   
  // componentDidMount(){
   //    this.newapipostmethod();
  // }

   //newapipostmethod = () => {
     //  var newmethodpost = {
       //    method: 'POST'
       //}
       //fetch('https://jsonplaceholder.typicode.com/posts'. newmethodpost)
       //.then(response => response.json())
       //.then
   //}

   render(){
       return(
           <View style={styles.container}>
               <Text style={styles.textedit}>uyryurbgrtbh</Text>
           </View>
       )
   }
}

export default Newapi;

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
