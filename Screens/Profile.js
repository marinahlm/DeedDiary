import React, { Component } from 'react';
//import PieChartScreen from "./Screens/Result";
import {
  StyleSheet,Button,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://c1.staticflickr.com/5/4836/45764531214_e63f1af433_t.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Marina Harumi</Text>
              <Text style={styles.info}>22 / Shah Alam, Selangor</Text>
              <Text style={styles.description}>Mission: To have fun in [my] journey through life and learn from [my] mistakes. </Text>
              
              <TouchableOpacity style={styles.buttonContainer} >
               <Button onPress={() => this.props.navigation.navigate('Date')} title="View Calendar"></Button> 
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} > 
                <Button onPress={() => this.props.navigation.navigate('Choose')} title="Input Deeds"></Button> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});