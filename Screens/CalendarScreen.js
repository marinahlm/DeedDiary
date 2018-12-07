import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DatePicker from 'react-native-datepicker';

export default class FormScreen extends Component {
  constructor(props){
    super(props)
    this.state = {date:"01-01-2017"}
  }

  okBtn = () => {
    alert('Congratulations!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.header}>Calendar</Text>
        <Text></Text>
        <DatePicker style={{width: 200}} date={this.state.date} mode="date" placeholder="select date"
        format="DD-MM-YYYY" minDate="01-01-2017"  maxDate="01-01-2020"
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
            top: 100,
            marginLeft: 0
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        </View>
        <View  style={styles.btmContainer}>
        <Text></Text>
        <Text style={styles.textbox}>Deeds that have been insert will appear here when the date has been choose.
        hahahahahahahhahahahahahahahahahahhahaahahahahahahahahahahahahahahahahahahahahahahahahahhahahahahahahha
        hahahahahahahahahahhahaahahahahahahahahahahahahahahahahahahahahahahahahah</Text>
        <Text></Text>
        <Button style={styles.button} onPress={this.okBtn} title="OK" /> 
        <Text style={styles.Hometext} onPress={() => this.props.navigation.navigate('Home')} >Home</Text>               
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
    backgroundColor: '#F5FCFF',
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
  },
  Hometext: {
    textDecorationLine:'underline',
    color: 'grey',
    paddingTop: 10,
    textAlign: 'center',
  }  
});
