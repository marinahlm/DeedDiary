import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center', padding:50}}>
        <Text>Home Screen</Text>        
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Details')} title="Input Deeds" />        
        <Button onPress={() => this.props.navigation.navigate('Date')} title="Calendar" />
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
    flexDirection: 'row',   
    justifyContent: 'space-evenly',     
  }
});
