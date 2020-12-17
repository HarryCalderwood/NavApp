import { SettingsInputComponentSharp } from '@material-ui/icons';
import React, { Component } from 'react'
import {View, Text, StyleSheet} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import * as Components from "../components/index";

const Login = (props) => {
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Components.Input placeholder = "Username"/>
            <Components.Button text = "Enter"/>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });