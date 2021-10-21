import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class UserMenu extends React.Component{
    render(){
        return(
            <View>
                  <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Userhome');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
<TouchableOpacity
style={{marginLeft:40}}>
    <Text style={styles.buttonText}>Home</Text>
</TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonText:{
color:'black',
fontStyle:"normal",
fontWeight:"bold",
fontSize:26
    }
})