import React, { useState } from "react";
import {
  View,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "../../styles/styles";
import { Text, TextInput, Switch, Button, Headline } from "react-native-paper";
import { signIn } from "../../../API/FirebaseFunctions";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(false);
  const onPasswordSwitch = () => setHidePassword(!hidePassword);

  const _handleLoginPress = () => {
    if (!email && !password) {
      Alert.alert("Please enter your email and password");
    } else if (!email) {
      Alert.alert("Please enter your email");
    } else if (!password) {
      Alert.alert("Please enter your password");
    } else {
      setEmail("");
      setPassword("");
      signIn(email, password);
    }
  };

  var bgImg = require("../../images/splashBackground.jpeg");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.center}>
          <View style={styles.flex3Container}>
            <Headline
              style={{ fontSize: 50, fontWeight: "bold", paddingTop: 60 }}
            >
              Desk Officer
            </Headline>
          </View>

          <View style={styles.flex3Container}>
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              textContentType={"emailAddress"}
              maxLength={320}
            />

            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Enter your password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              maxLength={20}
              secureTextEntry={hidePassword ? false : true}
            />

            <View style={styles.switchView}>
              <Text
                allowFontScaling={true}
                style={{ marginRight: 8, marginTop: 10, marginBottom: 30 }}
              >
                Show Password
              </Text>
              <Switch
                style={{ marginBottom: 20 }}
                value={hidePassword}
                label="Show Password"
                onValueChange={onPasswordSwitch}
                // style={{
                //   transform: [
                //     { scaleX: moderateScale(0.6, 1) },
                //     {
                //       scaleY: moderateScale(0.6, 1),
                //     },
                //   ],
                //   marginTop: "0.6%",
                // }}
              ></Switch>
            </View>
          </View>

          <View style={styles.flex1Container}>
            <Button mode="contained" onPress={_handleLoginPress}>
              Login
            </Button>
          </View>

          <View style={styles.flex1Container}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password
            </Button>
          </View>

          <View style={styles.flex1Container}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register New User
            </Button>
          </View>

          <View style={styles.footerContainer} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;
