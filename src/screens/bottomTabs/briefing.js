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
        style: "cancel",
      },
      { text: "Yes", onPress: () => loggingOut() },
    ]);
  };
  componentDidMount() {
    var db = firebase.firestore();
    var markers = [];

    db.collection("mapMarker").onSnapshot((querySnapshot) => {
      var markerData = [];

      querySnapshot.forEach((doc) => {
        let currentID = doc.id;
        let obj = { ...doc.data(), ["id"]: currentID };
        markerData.push(obj);
      });

      // doc.docs.forEach((marker) => {
      //   let currentID = marker.id;
      //   let obj = { ...marker.data(), ["id"]: currentID };
      //   markers.push(obj);
      //   // console.log(doc.docs);
      this.setState({
        markerList: markerData,
      });
      // });
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
        <Appbar.Header style={{ height: 40 }}>
          <ScrollView style={{ marginLeft: 30 }}>
            <Button
              mode="contained"
              style={{ height: 39 }}
              onPress={() => console.log("Pressed")}
            >
              All locations
            </Button>
            <Button
              mode="contained"
              style={{ height: 50, backgroundColor: "#5dd48d" }}
              onPress={() => console.log("Pressed")}
              title="Green Zone"
            >
              Green Zone
            </Button>
            <Button
              mode="contained"
              style={{ backgroundColor: "#244fd1" }}
              onPress={() => console.log("Pressed")}
            >
              Blue Zone
            </Button>

            <Button
              mode="contained"
              style={{ backgroundColor: "#c42b1a" }}
              onPress={() => console.log("Pressed")}
            >
              Red Zone
            </Button>
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
