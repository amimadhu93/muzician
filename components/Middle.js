import React, { Component } from 'react';
import { StyleSheet, Text, View,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity } from 'react-native';
  import Icons from 'react-native-vector-icons/FontAwesome';
 
export default class Middle extends Component {
    _onPressButton=()=>{
        Alert.alert('aaa');
      }
    render() {
        return (
            <View style={styles.middle}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={usename => this.setState({ usename })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            
                            secureTextEntry={true}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TouchableOpacity 
                        style={styles.touchButton} 
                        onPress={this._onPressButton}>
                            <Text
                                style={styles.login}
                                placeholder="LOG IN"
                            >LOGIN</Text>
                        </TouchableOpacity>
                        <Text style={styles.forgotpass}> Forgot your password</Text>
                        <View style={styles.topicwrap}>
                            <View style={styles.hl}></View>
                            <Text style={styles.txt} >OR</Text>
                            <View style={styles.hl}></View>
                        </View>
                        <Text style={styles.singintext}> Sing In With</Text>
                        <TouchableOpacity style={styles.facetouch}  onPress={this._onPressButton}>
                            <View style={styles.touchButton}>
                            
                            <View style={styles.facebook}>
                                <Icons name="facebook" size={20} style={styles.faceicon} />
                            <Text style={styles.fb}>FACEBOOK</Text>
                            </View>
                            </View>   
                        </TouchableOpacity>
                    </View>
            
        )
    }
}
const styles = StyleSheet.create({
    middle:{
        flex:1,
        alignItems: 'center',
      },
      touchButton:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center" 
      },
      facetouch:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center" 
      },
      faceicon:{
        color:"#fff",  
      },
      fb:{
        marginLeft:10,
        fontSize:20,
        color:"#fff",
      },
    
      textInput: {
        height: 50,
        width:"86%",
        textAlign:'center',
        borderColor: '#fff',
        borderWidth: 1.5,
        padding:10,
        borderRadius:30,
        fontSize:20,
        backgroundColor:"rgba(164, 176, 189, 0.5)",
        color:"#000",
        marginBottom:10
     },
     login:{
      height: 50,
      width:"86%",
      textAlign:'center',
      borderColor: '#fff',
      borderWidth: 1.5,
      padding:10,
      borderRadius:30,
      fontSize:20,
      backgroundColor:"rgba(116, 185, 255, 0.7)",
      color:"#fff",
      marginBottom:10
     },
     facebook:{
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
    
      height: 50,
      width:"70%",
      textAlign:'center',
      borderColor: '#fff',
      borderWidth: 1.5,
      padding:10,
      borderRadius:30,
      fontSize:20,
      backgroundColor:"rgba(10, 121, 223, 0.7)",
      color:"#fff",
      marginTop:10
     },
    
     forgotpass:{
       fontSize:20,
       color:"#fff"
     },
     topicwrap:{
      alignItems:"center",
      flexDirection:"row",
      marginTop:10,
      marginBottom:10,
     },
     hl:{
       width:"20%",
       height:1,
       backgroundColor:"#fff"
     },
     txt:{
       
       paddingLeft:10,
       paddingRight:10,
       fontSize:16,
       fontWeight:"bold",
       color:"#fff"
     },
     singintext:{
      fontSize:18,
      fontWeight:"bold",
      color:"#fff"
     },

});