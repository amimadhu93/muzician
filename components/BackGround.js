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
import Middle from './Middle';
import Upper from './Upper';
import Lower from './Lower';



import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icons from 'react-native-vector-icons/FontAwesome';
export default class BackGround extends Component  {
  constructor(props) {
    super(props);
    this.state={
      usename:"",
      email:""
    }
  }
  
  
    render(){
        return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                
                <View style={styles.container}>
                    <ImageBackground source={require('./.././assets/images/home.png')}
                        style={{width: '100%', height: '100%'}}>
                        <Upper/>
                        <Middle/>
                        <Lower/>  
                    </ImageBackground>
                </View>              
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  scrollView:{
    flex:2,
   
  },
});
