import React from 'react';
import {View, Text, StyleSheet, Dimensions} from "react-native";

import * as Componets from "../components/index";

const Input = (props) => (    
<View style={{marginVertical: 20, alignItems: "center"}}>
            <TextInput style = {styles.input} placeholder = {"props.placeholder"}/>
            </View>
);

export default Input;

const styles = StyleSheet.create({
    input: {
      borderColor: "#555",
      borderWidth: 1,
      padding: 10,
      width: width/1.1,
      textAlign: "center",
      borderRadius:20
    },
  });