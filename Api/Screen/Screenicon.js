import React from 'react'
import { View,Text, TouchableOpacity, SafeAreaView  } from 'react-native'


export default class Screen extends React.Component{



    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <SafeAreaView style={{flex: 1}}>
                 <TouchableOpacity
                 style={{alignItems: flex-end, margin:16}}
                 onpress=  {this.props.navigation.openDrawer}
                 >
                  <FontAwesome5 name='profile' size={24} color='#161924' />
                 </TouchableOpacity>
                 <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}><Text>{this.props.name} screen</Text></View>
                </SafeAreaView>
            </View>
        )
    }
}