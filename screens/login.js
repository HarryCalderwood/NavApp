import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const Login = (props) => {
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <View style={{marginVertical: 20}}>
            <TextInput style = {styles.input} placeholder = "Username"/>
            <TextInput style = {styles.input} placeholder = "Password"/>
            </View>
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