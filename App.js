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

import BackGround from './components/BackGround';
//import OnlyBackground from './components/OnlyBackground';



import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icons from 'react-native-vector-icons/FontAwesome';
export default class App extends Component  {
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
        <BackGround/>
                 
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
