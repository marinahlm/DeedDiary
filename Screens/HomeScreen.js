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
        <Image
  source={{
    uri: 'https://document-export.canva.com/DADM_jqjvi4/8/thumbnail/0001-782013639.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 350, height: 350}}
/>        
        </View>
        <View style={styles.button}>
        {/* <Button onPress={() => this.props.navigation.navigate('Details')} title="Input Deeds" /> */}
        <Text></Text>        
        <Button onPress={() => this.props.navigation.navigate('Log')} title="Login" />
        <Text></Text>
        <Button onPress={() => this.props.navigation.navigate('Prof')} title="Profile" />
        <Text></Text>
        <Button onPress={() => this.props.navigation.navigate('Choose')} title="Input Deeds" />
        <Text></Text>
        <Button onPress={() => this.props.navigation.navigate('Date')} title="View Deeds" />
        <Text></Text>
        
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
