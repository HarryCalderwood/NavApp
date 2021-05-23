import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import MapModal from "../../components/modal";
import * as Index from "../../components/index";
import { Headline } from "react-native-paper";

var bgImg = require("../../images/splashBackground.jpeg");

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.replace("Login");
    }, 2000);
  }

  render() {
    return (
      <ImageBackground source={bgImg} style={styles.backgroundImage}>
        <View style={styles.center}>
          <Index.AvatarText></Index.AvatarText>
          <Headline style={{ fontSize: 30, marginTop: 10, fontWeight: "bold" }}>
            Desk Officer
          </Headline>
        </View>
      </ImageBackground>
    );
  }
}
