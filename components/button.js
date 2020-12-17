import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = (props) => ( 
    <TouchableOpacity sytle={styles.button} onPress={props.onPress}>
        <Text style={{fontSize: 20, color: "black", fontWeight: "600"}}>{props.text}</Text>
    </TouchableOpacity>
    );

    export default Button;

    const styles = StyleSheet.create({
        button : {
            backgroundColor: "rgba(81,135,200,1)",
            padding: 10,
            borderWidth: 0,
            alignItems: "center",
            borderRadius: 20,
        },
    });