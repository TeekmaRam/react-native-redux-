import React from 'react'
import {View, Text, StyleSheet, style, Button, ScrollView, TouchableOpacity} from 'react-native'

export default class Countryshareborder extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        CountryShareBorder : []
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
    .then(Result => {
        let Contryborder = this.props.route.params.Contryborder;
        let  CountryShareBorder = Result.filter(item => item.name == Contryborder)
        this.setState({CountryShareBorder})
    }).catch((error) => {
        console.log('shbchsdvjbfv',error)
    } )
}                  

   render(){
    
       return(
           <ScrollView style={styles.container}>
               {  
                  this.state.CountryShareBorder.map((callname, key) => (
                        <Text style={styles.callname} key={key}>{callname.borders}</Text>
                         ))
 
                }  
           </ScrollView>
       )
   }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#4f6d7a'
    },
    
    

    callname: {
        textAlign: 'center',
        flexDirection: 'column',    
        fontSize: 30,
        color:'#FF5733'
    }
}) 
