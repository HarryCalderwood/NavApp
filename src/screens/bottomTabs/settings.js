import React, { useState, Component } from "react";
import * as firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

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
import * as Index from "../../components/index";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileModalVisible: false,
      passwordModalVisible: false,
      signInModalVisible: false,
      privacyModalVisible: false,
      userEmail: "",
      userFirstName: "John",
      userLastName: "",
    };
  }

  _handleProfilePress = () => {
    this.setState({ profileModalVisible: true });
  };

  _signInDetailsFunctions = {
    _handleSignInDetailsModalClose: () => {
      this.setState({ signInModalVisible: false });
    },
  };

  _privacyModalFunctions = {
    _handlePrivacyModalClose: () => {
      this.setState({ privacyModalVisible: false });
    },
  };

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var loggedInUser = user;
    var email, firstName, lastName;
    if (loggedInUser != null) {
      email = user.email;
      this.setState({ userEmail: email });
      firstName = user.firstName;
      this.setState({ userFirstName: firstName });
      lastName = user.lastName;
      this.setState({ userLastName: lastName });
    }
  }

  render() {
    const { profileModalVisible } = this.state;
    const { passwordModalVisible } = this.state;
    const { signInModalVisible } = this.state;
    const { privacyModalVisible } = this.state;

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
          transparent={true}
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
              <ScrollView style={{ height: "80%" }}>
                <Title>Name</Title>
                <Text style={{ marginBottom: 20 }}>
                  {this.state.userFirstName} {this.state.userLastName}
                </Text>
                <Title>Email Address</Title>
                <Text style={{ marginBottom: 20 }}>{this.state.userEmail}</Text>
                <Title>You are a member of MOD Surveillance Map</Title>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => this.setState({ signInModalVisible: true })}
        >
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Sign in details</Text>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({ privacyModalVisible: true })}
        >
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Privacy settings</Text>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://help.twitter.com/en")}
        >
          <Surface style={styles.surface}>
            <Text style={styles.surfaceText}>Help and FAQs</Text>
          </Surface>
        </TouchableOpacity>

        <Index.SignInDetailsModal
          modalVisible={this.state.signInModalVisible}
          signInModalClose={this._signInDetailsFunctions}
        />
        <Index.PrivacyModal
          modalPrivacyVisible={this.state.privacyModalVisible}
          privacyModalClose={this._privacyModalFunctions}
        />
      </View>
    );
  }
}
