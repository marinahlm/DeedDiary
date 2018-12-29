import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import CalendarScreen from "./Screens/CalendarScreen";
import ChooseDeedScreen from "./Screens/ChooseDeedType";
import DetailsScreen from "./Screens/DetailsScreen";
import Profile from "./Screens/Profile";
 import TodoList from "./Screens/EnterBadDeed";
 import TodoList2 from "./Screens/EnterGoodDeed";
//import PieChartScreen from "./Screens/Result"; 


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Log: DetailsScreen,
    Prof: Profile,
    Choose: ChooseDeedScreen,     
    Date: CalendarScreen,
     Bad : TodoList,
     Good : TodoList2,
    //Stat: PieChartScreen,     
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}
