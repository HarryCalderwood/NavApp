import React, { useState, useEffect, Component } from "react";
import { TouchableOpacity, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import * as firebase from "firebase";
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
        <Appbar.Header>
          <Appbar.Content title="" />
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(94, 184, 95)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}>All locations</Text>
            {/* <Button mode="contained">Green Zone</Button> */}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(94, 184, 95)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}>Green Zones</Text>
            {/* <Button mode="contained">Green Zone</Button> */}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(48, 107, 227)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}> Blue Zones </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(230, 67, 46)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}> Red Zones</Text>
          </Pressable>
          <Appbar.Action icon="logout" onPress={this.logoutAlert} />
        </Appbar.Header>

        <View style={styles.flex12Container}>
          <ScrollView>
            {this.state.markerList.map((pin, index) => (
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(153, 153, 153)" : "white",
                  },
                  styles.wrapperCustom,
                ]}
              >
                <Card key={index} style={{}}>
                  <Card.Title
                    title={pin.name}
                    // subtitle={
                    //   "Recorded by " +
                    //   pin.recordedBy +
                    //   " on " +
                    //   pin.date +
                    //   " at " +
                    //   pin.time
                    // }
                  />
                  <Card.Content>
                    <Paragraph>{pin.description} </Paragraph>
                    {/* <Paragraph>{toDate(pin.timestamp)} </Paragraph> */}
                  </Card.Content>
                  {/* <Card.Cover source={pin.image} /> */}
                  <Card.Actions>
                    <Button>Edit</Button>
                  </Card.Actions>
                </Card>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
