import React, { useState, useEffect } from 'react';
import { View, Keyboard, TouchableOpacity, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { styles } from '../../styles/styles'
import MapModal from '../../components/modal';
import * as Index from '../../components/index';
import { Title, Text, Subheading, TextInput, Switch, Button, Headline } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';


const Login = ({ navigation }) => {

  const [email, onChangeEmail] = React.useState('Username');
  const [password, onChangePassword] = React.useState('Password');
  const [hidePassword, setHidePassword] = useState(false);
  const onPasswordSwitch = () => setHidePassword(!hidePassword);

  var bgImg = require('../../images/splashBackground.jpeg');

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.center}>


          <ImageBackground
            source={bgImg}
            style={styles.backgroundImage}
          >


            <View style={styles.flex3Container}>
              <Headline style={{ fontSize: 50, paddingTop: 80, fontWeight: 'bold' }}>Login</Headline>
            </View>

            <View style={styles.flex2Container}>

              <TextInput
                mode="flat"
                style={styles.textInput}
                label="Email"
                onChangeText={text => onChangeEmail(text)}
                email={email}
                textContentType={'emailAddress'}
                maxLength={320}
              />
            </View>


            <View style={styles.flex2Container}>

              <TextInput
                mode="flat"
                style={styles.textInput}
                label="Password"
                onChangeText={password => onChangePassword(password)}
                password={password}
                maxLength={20}
                allowFontScaling={true}
                blurOnSubmit={true}
                secureTextEntry={hidePassword ? false : true}
              />

              <View style={styles.switchView}>
                <Text allowFontScaling={true} style={{ marginTop: 8 }} >
                  Show Password
                </Text>
                <Switch
                  value={hidePassword}
                  label="Show Password"
                  onValueChange={onPasswordSwitch}
                  style={{
                    transform: [{ scaleX: moderateScale(0.6, 1) }, {
                      scaleY:
                        moderateScale(0.6, 1)
                    }],
                    marginTop: '0.6%'
                  }}
                ></Switch>


              </View>
            </View>


            <View style={styles.flex1Container}>
              <Button mode="contained" onPress={() => navigation.navigate('Map')}>
                login
          </Button>
            </View>

            <View style={styles.flex1Container}>
              <Button mode="contained" onPress={() => navigation.navigate('Register')}>
                Forgot Password?
          </Button>
            </View>

            <View style={styles.flex1Container}>
              <Button mode="contained" onPress={() => navigation.navigate('Register')}>
                Register New User
          </Button>
            </View>


            <View style={styles.footerContainer} />

          </ImageBackground>

        </View >

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >

  );
};
export default Login;