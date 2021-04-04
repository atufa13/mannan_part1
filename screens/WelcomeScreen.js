import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

export default class LoginScreen extends Component{
    
    goToScheduleScreen=()=>{
        this.props.navigation.navigate('ScheduleScreen')
    }

    render(){
        return(
            <Text>
                <TouchableOpacity style={styles.button} 
                onPress={()=>this.goToScheduleScreen()}
                >

                </TouchableOpacity>
            </Text>
        )
    }
    
}
const styles=StyleSheet.create({
    button:{
        justifyContent : 'center',
        alignSelf : 'center',
        borderWidth : 2,
        marginTop:50,
        width : 200,
        height:50,
      },
})