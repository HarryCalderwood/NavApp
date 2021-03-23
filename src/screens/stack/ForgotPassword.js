import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { styles } from "../../styles/styles";
import { forgotPassword } from "../../../API/FirebaseFunctions";

import {
  Title,
  Text,
  Subheading,
  TextInput,
  Switch,
  Button,
  Headline,
} from "react-native-paper";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const _handleSendPasswordReset = () => {
    if (!email) {
      Alert.alert("Please enter your registered email address");
    } else {
      forgotPassword(email);
    }
  };

  return (
    <View style={styles.flex1Container}>
      <View style={styles.flex2Container}>
        <Title>Forgot password?</Title>
      </View>
      <View style={styles.flex1Container}>
        <Title
          style={{
            marginRight: 40,
            marginLeft: 40,
          }}
        >
          Please enter your email address below. We will send you an email link
          to reset your password.
        </Title>
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          textContentType={"emailAddress"}
          maxLength={320}
        />
      </View>

      <View style={styles.flex2Container}>
        <Button mode="contained" onPress={_handleSendPasswordReset}>
          Send password reset
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
