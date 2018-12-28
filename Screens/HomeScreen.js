import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Tabbar from 'react-native-tabbar-bottom';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
    }
  }

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
        
        {this.state.page === "HomeScreen"}
        {this.state.page === "ProfileScreen"}
        {this.state.page === "InputScreen"}
        {this.state.page === "CalendarScreen"}
        
        <Tabbar stateFunc={(tab) => {
            this.setState({page: tab.page})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
            },
            {
              page: "ProfileScreen",
              icon: "person",
              badgeNumber: 7,
            },
            {
              page: "InputScreen",
              icon: "pencil",
            },
            {
              page: "CalendarScreen",
              icon: "chatbubbles",              
            },
          ]}></Tabbar>
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
