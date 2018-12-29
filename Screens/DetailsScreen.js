import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class DetailsScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  } 
  handleEmail = (text) => {  this.setState({ email: text }) }
  handlePassword = (text) => { this.setState({ password: text }) }
  login = (email, pass) => { alert('email: ' + email + ' password: ' + pass)   }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{
            uri: 'https://document-export.canva.com/DADM_jqjvi4/8/thumbnail/0001-782013639.png',
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
            body: 'Your Body goes here',
          }}
          style={{width: 350, height: 350}}
        />

        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "  Email"
        placeholderTextColor = "#ad9f91"
        autoCapitalize = "none"
        onChangeText = {this.handleEmail}/>

        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "  Password"
        placeholderTextColor = "#ad9f91"
        autoCapitalize = "none"
        onChangeText = {this.handlePassword}/>

        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
          () => this.props.navigation.navigate("Prof")
          }>
          <Text style = {styles.submitButtonText}> Login </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  paddingTop: 23
  },
  input: {
  margin: 15,
  height: 40,
  borderColor: '#373b4d',
  borderWidth: 1
  },
  submitButton: {
  backgroundColor: '#373b4d',
  padding: 10,
  margin: 15,
  height: 40,
  },
  submitButtonText:{
  color: 'white'
  }
 })