import React, { PureComponent } from "react";
import { TouchableOpacity, ScrollView, View, Alert } from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../../../API/FirebaseFunctions";
import { styles } from "../../styles/styles";

import { Card, Button, Paragraph, Appbar } from "react-native-paper";

export default class Briefing extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
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
  //Alternative component mounting method:
  // loadFirebaseData(async) {
  //   // isMounted = true;
  //   var db = firebase.firestore();
  //   const markers = [];
  //   db.collection("mapMarker")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((marker) => {
  //         let currentID = marker.id;
  //         let obj = { ...marker.data(), ["id"]: currentID };
  //         markers.push(obj);
  //       });
  //       // if (this.isMounted) {
  //       this.setState({
  //         markerList: markers,
  //       });
  //       // }
  //     });
  // }

  render() {
    const { navigation } = this.props;
    // this.loadFirebaseData();
    return (
      <View style={styles.container}>
        <Appbar.Header style={{ height: 35 }}>
          <ScrollView>
            <Button mode="contained" title="Blue Zone">
              Green Zone
            </Button>
            <Button mode="contained">Blue Zone</Button>
            <Button mode="contained">Red Zone</Button>
            <Button mode="contained">Clear</Button>
          </ScrollView>
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
