import React, { Component } from 'react'
import {View, Text, StyleSheet} from "react-native";
import * as Components from "../components/index";
import {connect} from 'react-redux'

const Login = (props) => {
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Components.Input placeholder = "Username"/>
            <Components.Button text = "Enter"/>
        </View>
    );
};

const mapStateToProps = (state) => ({user: state.user});

const mapDispatchToProps = (dispatch) => ({
    addUser: (username) => dispatch({type:ActionTypes.ADD_USER})
})


export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });