import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Button, View } from 'react-native';

export default class ChooseDeedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}>RECORD MY DEEDS</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

       
        
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Good')} title="Good Deed" />
        <Text></Text>
        <Text></Text>    
        <Button onPress={() => this.props.navigation.navigate('Bad')} title="Bad Deed" />
        </View>

        
      </View>

    );
  }
  
  handlePress = () => {
  }
}

const styles = StyleSheet.create({
  button: {
    
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  header:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    color: 'black',
  }
});