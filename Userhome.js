import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
export default class Userhome extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
               <TouchableOpacity
       onPress={()=>{this.props.navigation.navigate('UserMenu')}} >
            <Image
              style={{ width: 30, height: 30, marginLeft: 15, marginTop:20 }}
              source={require('../assets/images.png')}
            />
            </TouchableOpacity>
                
            </View>
        )
    }
}