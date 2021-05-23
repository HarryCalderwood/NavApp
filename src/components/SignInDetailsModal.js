import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Title, Text, Headline, TextInput, Button } from "react-native-paper";
import { styles } from "../styles/styles";
import Modal from "react-native-modal";
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from "firebase";
export default class SignInDetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  _handlePasswordReset = () => {
    var user = firebase.auth().currentUser;
    var newPassword = getASecureRandomPassword();

    user
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onSwipeComplete={
          this.props.signInModalClose._handleSignInDetailsModalClose
        }
        onBackdropPress={
          this.props.signInModalClose._handleSignInDetailsModalClose
        }
      >
        <View style={styles.settingsModalCard}>
          <View
            style={{ marginRight: 300, marginTop: 10, position: "relative" }}
          >
            <TouchableOpacity
              onPress={
                this.props.signInModalClose._handleSignInDetailsModalClose
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color="black"
                size={30}
                style={{ marginLeft: 15, marginRight: 15 }}
              />
            </TouchableOpacity>
          </View>
          <Headline> Sign In Details</Headline>
          <View style={styles.settingsInfo}>
            <ScrollView style={{ height: 300 }}>
              <TouchableOpacity>
                <Title>Reset Password</Title>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
