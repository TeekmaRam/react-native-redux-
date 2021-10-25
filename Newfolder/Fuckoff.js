import { useEffect, useState } from 'react'
import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,style } from 'react-native';
import axios from 'axios'



const CountryName = () => {
  
    
const[data, settimeoutfetch] = useState([])

useEffect(() => {
    async function fetchdata() {  
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts',
  method = 'get',

  )
    .then(res => res.json())
    .then(data => 
        settimeoutfetch(data = data)
    ).catch(err => {
        console.log('jenvdkjnfvd', err)
    })
}
fetchdata();
    //fetchProductsss();

},[])


// componentDidMount(){
//     console.log('aouschsudvg')
 
// fetch ('https://jsonplaceholder.typicode.com/posts',
//   method = 'get',
//  )
//     .then(res => res.json())
//     .then(data => 
//         this.setState({data: data})
//     ).catch(err => {
//         console.log('jenvdkjnfvd', err)
//     })
// }



renderItem = (item) => {
    return <Text>{item.body}</Text>
}


    return(
<View>
 
<FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
        />
   
</View>
    )
}


export default CountryName;

const styles = StyleSheet.create({
    

    callname: {
        textAlign: 'center',
        fontSize: 50,
        color:'#4f6d7a'
    }
}) 
