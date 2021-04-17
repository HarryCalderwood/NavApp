import React, { useState, useEffect, Component } from "react";
import { TouchableOpacity, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-navigation";
import * as firebase from "firebase";
import { loggingOut } from "../../../API/FirebaseFunctions";
import { styles } from "../../styles/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Card,
  Title,
  Paragraph,
  Text,
  Appbar,
  Button,
} from "react-native-paper";

export default class Briefing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markerList: [],
      card: [],
    };
  }

  logoutAlert = () => {
    Alert.alert("Log out", "Do you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => loggingOut() },
    ]);
  };

  componentDidMount() {
    var db = firebase.firestore();
    const markers = [];
    db.collection("mapMarker")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((marker) => {
          let currentID = marker.id;
          let obj = { ...marker.data(), ["id"]: currentID };
          markers.push(obj);
        });
        this.setState({
          markerList: markers,
        });
      });
  }

  render() {
    const { navigation } = this.props;
    this.componentDidMount();

    return (
      <View style={styles.container}>
        <Appbar.Header style={{ height: 35 }}>
          <Appbar.Content title="" />
          {/* <Button mode="contained">Blue Zone</Button>
          <Button mode="contained">Green Zone</Button>
          <Button mode="contained">Red Zone</Button> */}
          <Appbar.Action icon="logout" onPress={this.logoutAlert} />
        </Appbar.Header>

        <View style={styles.flex12Container}>
          <ScrollView>
            {this.state.markerList.map((pin, index) => (
              <TouchableOpacity>
                <Card key={index} style={styles.briefingCard}>
                  <Card.Title title={pin.name} />
                  <Card.Content>
                    <Paragraph>{pin.description} </Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

{
  /* <Modal
          animationType="slide"
          transparent={true}
          visible={editModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={() => this.setEditModalVisible(false)}
          onBackdropPress={() => this.setEditModalVisible(false)}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.editModalCard}>
              <View style={styles.flex1Container}>
                <Title>Edit Marker Information</Title>
                <TextInput
                  mode="outlined"
                  style={styles.textInput}
                  onChangeText={this._handleEditName}
                  maxLength={320}
                  value={this.state.markerEditNameInput}
                />
              </View>

              <TextInput
                mode="outlined"
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                onChangeText={this._handleEditDescription}
                maxLength={1000}
                allowFontScaling={true}
                blurOnSubmit={true}
                value={this.state.markerEditDescriptionInput}
              />

              <View style={styles.flex1Container}>
                <Text>Has the information been verified as correct?</Text>
                <Button mode="contained" onPress={this._handleEditUpdate}>
                  Save Changes
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal> */
}
