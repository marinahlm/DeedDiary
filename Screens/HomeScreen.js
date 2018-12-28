import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default class HomeScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center', padding:50}}>
        <Text></Text>
        <Image source={require('../img/logo.png')} style={{width:350,height:275,marginBottom:30}}/>        
        </View>
        <View style={styles.button}>
        {/* <Button onPress={() => this.props.navigation.navigate('Details')} title="Input Deeds" /> */}
        <Text></Text>        
        <Button onPress={() => this.props.navigation.navigate('Date')} title="View Deeds" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
    textAlignVertical: 'top',
  },
  button: {
    width: 150,
    flexDirection: 'column',   
    justifyContent: 'space-evenly',
    marginLeft: 140,
    marginBottom: 150,     
  }
});
