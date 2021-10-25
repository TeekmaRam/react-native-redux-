import React from 'react'
import {View, Text, StyleSheet, style, Button, ScrollView, TouchableOpacity, Image} from 'react-native'
import {Countryshareborder} from './Contryshareborder'


export default class Layoutpage extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        countryName : []
        
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
        let regionName = this.props.route.params.regionName;
        let countryName = result.filter(item=>item.region == regionName);
        
        this.setState({countryName})
    }).catch((error) => {
        console.log('Error',error)
    } )
}                  

   render(){
       return(
           <ScrollView style={styles.container}>         
               {      
               
                  this.state.countryName.map((callname, key) => (
                    <View>
                        <TouchableOpacity onPress= { ()  => this.props.navigation.navigate('Countryshareborder', {Contryborder: callname.name})}>
                        <Text style={styles.callname} key={key}>{callname.name}</Text>
                        </TouchableOpacity>
                        <Image source = {{ uri: callname.flag }} style={styles.imageView} />
                        </View>
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
    
    imageView: {
 
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
     
    },
    

    callname: {
        textAlign: 'center',
        fontSize: 20,
        color:'#4f6d7a'
    }
    
}) 
