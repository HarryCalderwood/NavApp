import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Title, Text, TextInput, Button } from "react-native-paper";
import { styles } from "../styles/styles";
import Modal from "react-native-modal";

export default class AddMarkerModal extends Component {
  constructor(props) {
    super(props);
  }

  _renderPickedImage = () => {
    if (this.props.addMarkerURI == null) {
      return (
        <Image
          source={require("../images/placeholder.png")}
          style={{ width: 180, height: 180 }}
        />
      );
    } else {
      return (
        <Image
          source={{ uri: this.props.addMarkerURI }}
          style={{ width: 150, height: 150 }}
        />
      );
    }
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        // animationIn="none"
        // animationOut="slideOutDown"
        // swipeDirection="down"
        // onSwipeComplete={this._handleAddMarkerBackdropPress}
        onBackdropPress={this.props.functions._handleAddMarkerBackdropPress}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.addModalCard}>
            <View style={{ marginRight: "60%", marginTop: 10 }}>
              <TouchableOpacity
                onPress={this.props.functions._handleAddMarkerBackdropPress}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="black"
                  size={30}
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              {/* <View style={{ alignItems: "center", flex: 1 }}> */}
              <Button
                style={{ marginBottom: 20 }}
                mode="contained"
                onPress={this.props.functions._pickImage}
              >
                Add image
              </Button>
              <View style={{ width: 100, height: 100 }}>
                {this._renderPickedImage}
              </View>
            </View>
            {/* </View> */}

            <View style={styles.flex1Container}>
              <TextInput
                mode="outlined"
                style={styles.textInput}
                label="Location Name"
                onChangeText={this.props.functions._handleInputName}
                maxLength={320}
              />

              <TextInput
                mode="outlined"
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                label="Marker Description"
                onChangeText={this.props.functions._handleInputDescription}
                maxLength={1000}
                allowFontScaling={true}
                blurOnSubmit={true}
              />
              {/* <Text>Has the information been verified as correct?</Text> */}
            </View>

            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <Button
                mode="contained"
                onPress={this.props.functions._saveNewMarker}
              >
                Save
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
