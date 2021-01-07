import React, {Component} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';


import {styles} from '../../styles/styles'

  
Login= () =>  

        <View style= {styles.center}>
        <Text style={styles.title}>Login</Text>
        <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}/>      
              <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="black"
            />  
                <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
              <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
    </View>


export default Login;
