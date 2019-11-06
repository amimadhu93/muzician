import React, { Component } from 'react';
import { StyleSheet, Text, View,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity } from 'react-native';
  
export default class Upper extends Component {
    render() {
        return (
            <View style={styles.upper}>
                <Image
                
                    style={{width: 80, height: 80}}
                    source={require('./.././assets/images/logo_itself.png')}
                />
                 <Text style={styles.muzician}>MUZICIAN</Text>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    upper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center" 
       },
       muzician:{
         fontWeight:"bold",
         fontSize:22,
         color:"#fff"
       },
});