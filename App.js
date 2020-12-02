import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';


const MainNavigator = createStackNavigator({
  Home: {screen: Home}
}, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  }
});


const App = createAppContainer(MainNavigator);
export default App;


