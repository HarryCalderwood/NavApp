import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles'


const Login = ({navigation}) => {
  const [email, setEmail] = useState('Username');
  const [password, setPassword] = useState('Password');
  
  return(
        <View style= {styles.center}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.body}>Name</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(val) => setEmail(val)} 
            />      
          <Text style={styles.body}>Password:</Text>
          <TextInput  
            style={styles.inputText}
            secureTextEntry={true} 
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(val) => setPassword(val)} 
          />  
          <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate ('Home')}>
             <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
    </View>
  );
}
export default Login;