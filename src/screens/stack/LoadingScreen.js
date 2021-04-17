import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import * as firebase from "firebase";
import { Title, Text } from "react-native-paper";
import { styles } from "../../styles/styles";

export default function LoadingScreen({ navigation }) {
  // setTimeout(1000);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Map");
      } else {
        navigation.replace("Login");
      }
    });
  });

  return (
    <View style={styles.flex1Container}>
      <ActivityIndicator size="large" />
      <Title>Loading</Title>
    </View>
  );
}
