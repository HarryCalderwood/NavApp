import React, { useState, Component } from "react";
import * as firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import ThemeSwitch from "../../../App";
import {
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Title,
  Surface,
  Text,
  Subheading,
  TextInput,
  Appbar,
  Headline,
  Checkbox,
  Switch,
  Button,
} from "react-native-paper";
import { styles } from "../../styles/styles";
import { getUserInfo } from "../../../API/FirebaseFunctions";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileModalVisible: false,
      passwordModalVisible: false,
      userEmail: "",
    };
  }

  _handleProfilePress = () => {
    this.setState({ profileModalVisible: true });
    var user = firebase.auth().currentUser;
    var loggedInUser = user;
    var email;
    if (loggedInUser != null) {
      email = user.email;
      this.setState({ userEmail: email });
    }
  };

  _handlePasswordPress = () => {};
  _handleDarkModePress = () => {};

  render() {
    const { profileModalVisible } = this.state;
    const { passwordModalVisible } = this.state;

    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content style={{ alignItems: "center" }} title="Settings" />
        </Appbar.Header>
        <TouchableOpacity onPress={this._handleProfilePress}>
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Profile</Text>
          </Surface>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={profileModalVisible}
          onRequestClose={() => {
            this.setState({ profileModalVisible: false });
          }}
        >
          <View style={styles.settingsModalCard}>
            <View
              style={{
                marginRight: 300,
                marginTop: 10,
                position: "relative",
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ profileModalVisible: false })}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="black"
                  size={30}
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
              </TouchableOpacity>
            </View>

            <Headline>Profile</Headline>

            <View style={styles.settingsInfo}>
              <ScrollView style={{ height: 300 }}>
                <Title>User Name</Title>
                <Text style={{ marginBottom: 20 }}>{this.state.userEmail}</Text>
                <Title>Email Address</Title>
                <Text style={{ marginBottom: 20 }}>{this.state.userEmail}</Text>
                <Title>Maps Registered</Title>
                <Text>MOD Surveillance 10 </Text>
                <Text>MOD Surveillance 12 </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={this._handlePaswordPress}>
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Change Password</Text>
          </Surface>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={passwordModalVisible}
          onRequestClose={() => {
            this.setState({ passwordModalVisible: false });
          }}
        >
          <View style={styles.settingsModalCard}>
            <View
              style={{
                marginRight: 400,
                marginTop: 10,
                position: "relative",
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ passwordModalVisible: false })}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="black"
                  size={30}
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
              </TouchableOpacity>
            </View>

            <Headline>Profile</Headline>

            <View style={styles.settingsInfo}>
              <ScrollView style={{ height: 300 }}>
                <Title>User Name</Title>
                <Text style={{ marginBottom: 20 }}>{this.state.userEmail}</Text>
                <Title>Email Address</Title>
                <Text style={{ marginBottom: 20 }}>{this.state.userEmail}</Text>
                <Title>Maps Registered</Title>
                <Text>MOD Surveillance 10 </Text>
                <Text>MOD Surveillance 12 </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={this._handleDarkModePress}>
          <Surface style={styles.surface}>{/* <ThemeSwitch /> */}</Surface>
        </TouchableOpacity>

        <View></View>
      </View>
    );
  }
}
