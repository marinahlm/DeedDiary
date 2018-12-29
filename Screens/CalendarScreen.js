import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Icon } from "react-native";
import DatePicker from 'react-native-datepicker';
import Tabbar from 'react-native-tabbar-bottom';
import { TextInput } from "react-native-gesture-handler";

export default class CalendarScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
    },
    headerTintColor: "#fff",
    animationEnabled: true  
  };
  
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      deed: '',
    }
  }

  okBtn = () => {
    alert('Congratulations!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.header}>Calendar </Text>
        
        <DatePicker style={{width: 200}} date={this.state.date} mode="date" placeholder="select date"
        format="DD-MM-YYYY" minDate="01-01-2018"  maxDate="31-12-2019"
        confirmBtnText="Confirm" cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 50,
            top: 0,
            marginLeft: 0,
            width: 100,
            height: 100,
          },
          dateInput: {
            top: 110,
            marginLeft: 0
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        </View>
        <View  style={styles.btmContainer}>
        <TextInput editable={false} maxLength={100} style={styles.textbox}>Your deeds will be displayed here.</TextInput>
        <Text></Text>
        <Text></Text>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Home')} title="Home"></Button>               
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btmContainer:{
    marginLeft: 40,
    marginRight: 40,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textbox: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,1)',
    padding: 10,
  },
  button: {
    position:'relative',
  }
});
