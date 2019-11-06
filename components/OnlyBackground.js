import React, { Component } from 'react';
import { StyleSheet, Text, View,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity } from 'react-native';
  import Upper from './Upper';
export default class OnlyBackground extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <ImageBackground source={require('./.././assets/images/home.png')}
                        style={{width: '100%', height: '100%'}}>
                       <Upper/>   
                    </ImageBackground>
                </View>  
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
   
  });