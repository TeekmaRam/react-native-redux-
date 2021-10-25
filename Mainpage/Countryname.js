import { useEffect, useState } from 'react'
import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from  '../ReduxReducer/Action-fetch'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, style } from 'react-native';
import axios from 'axios'




const CountryName = ({fetchProductsss, CountryNamess}) =>{
    

useEffect(() => {
   fetchProductsss();

},[])


 return(
<View style ={styles.backgroundcolour}>
<FlatList
data={CountryNamess}
keyExtractor={(item) => item.id}
renderItem={({item}) =>(
    <View style={styles.container}>
        <Text style={styles.CountryNamess}>{item.email}</Text>
    </View>
)}                                                                                                         
 />
    <Text>sihvhhhhyuv</Text>
</View>
    )
}

const statedispatch = (state) => {
   return{
       CountryNamess: state.CountryName
   }
}



const mapdispatcecountry = (dispatch) => ({

    fetchProductsss  : () => dispatch(fetchProducts())
    
})


const styles = StyleSheet.create({
    backgroundcolour: {
    backgroundColor: '#f9c2ff',
    },
    container: {
     alignItems: 'center'
    },
    CountryNamess: {
    }
})
   


export default connect( statedispatch, mapdispatcecountry)  (CountryName);
