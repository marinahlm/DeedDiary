import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class DetailsScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      deed: '',
    }
  }
  
  //set to today's date
  dt = new Date(Date()); 

  saveBtn = () => {
    alert('Nice! You have done a good work there buddy.');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.header}>Your Deeds</Text>
        <Text></Text>
        <Text style={styles.textbox1}>{this.dt.toDateString()}</Text>
        <Text></Text>              
        <TextInput editable={true} maxLength={100} style={styles.textbox} placeholder='type your deed here ..'></TextInput>
        <Text></Text>
        <Button style={styles.button} onPress={this.saveBtn} title="SAVE" /> 
        <Text></Text>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Home')} title="HOME"></Button>               
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  header: {
    color:'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textbox: {
    width:300,
    height:200,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,1)',
    padding: 10,
  },
  textbox1: {
    textAlign:'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    fontSize:20,
    fontWeight:'bold',
  },
  button: {
    //flexDirection: 'row',
    width:150,
    flexDirection: 'column',   
    justifyContent: 'space-evenly',
    marginLeft:140,
    marginBottom: 150,   
  }
});
