import React, { Component } from 'react';
import { StyleSheet, Text, View,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity } from 'react-native';
  
export default class Lower extends Component {
    render() {
        return (
            <View style={styles.lower}></View> 
            
        )
    }
}
const styles = StyleSheet.create({
    lower:{
        flex:1, 
      }
});