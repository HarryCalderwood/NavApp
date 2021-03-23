import React, { useState, Component } from "react";

import {
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
} from "react-native";
import {
  Title,
  Surface,
  Text,
  Subheading,
  TextInput,
  Appbar,
  Headine,
  Checkbox,
  Switch,
  Button,
  Headline,
} from "react-native-paper";
import { styles } from "../../styles/styles";

_handleProfilePress = () => {
  console.log("hello");
};

_handlePasswordPress = () => {};

const Settings = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content style={{ alignItems: "center" }} title="Settings" />
      </Appbar.Header>
      <Surface style={styles.surface} onProfilePress={_handleProfilePress}>
        <Text style={styles.surfaceText}>Profile</Text>
      </Surface>
      <Surface style={styles.surface}>
        <Text style={styles.surfaceText}>Change Password</Text>
      </Surface>
      <Surface style={styles.surface}>
        <Text style={styles.surfaceText}>Dark Mode</Text>
      </Surface>
      <Surface style={styles.surface}>
        <Text style={styles.surfaceText}>Text Size</Text>
      </Surface>

      <View></View>
    </View>
  );
};

export default Settings;
