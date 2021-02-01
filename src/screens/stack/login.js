import React, { useState } from 'react';
import { View, Text, Button, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles'


const Login = ({ navigation }) => {


  const [email, onChangeEmail] = React.useState('Username');
  const [password, onChangePassword] = React.useState('Password');

  return (
    <View style={styles.center}>

      <View style={styles.headerContainer}>
      
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Name</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={text => onChangeEmail(text)}
        email={email}
        maxLength={320}
        allowFontScaling={true}
        blurOnSubmit={true}
        textContentType={'emailAddress'}

      />
      <Text style={styles.inputLabel}>Password:</Text>

      <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="black"
        onChangeText={password => onChangePassword(password)}
        password={password}
        maxLength={20}
        allowFontScaling={true}
        blurOnSubmit={true}
        
      />
      </View>

      <View style={styles.loginBtnContainer}>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.regBtnContainer}>
      <TouchableOpacity style={styles.regNewUserdBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.btnText}>Register New User</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>

      
      <View style={styles.footerContainer}>
      
      </View>
    </View>
  );
}
export default Login;