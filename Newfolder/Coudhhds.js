import { useEffect, useState } from 'react'
import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from  '../ReduxReducer/Action-fetch'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios'



class CountryName extends React.Component {
    constructor(props){
        super(props);
       
        
    }

componentDidUpdate(){
   fetchProducts();

    //fetchProductsss();

}

fetchdataaa = (item) => {
    return <Text>{item.title}</Text>     
}



render(){
    
    return(
<View>
<FlatList
data={this.props.CountryName}
renderItem={({item}) => fetchdataaa(item)}
                                                                                                           
 />
    <Text>sihvhhhhyuv</Text>
</View>
    )
}}

const statedispatch = (state) => {
   return{
       CountryName: state.CountryName
   }
}



// const mapdispatcecountry = (dispatch) => ({

//     fetchProductsss  : () => dispatch(fetchProducts())
    
// })
   


export default connect( statedispatch, {fetchProducts})  (CountryName);
