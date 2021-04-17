import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BackButton = (props) => {
  return (
    <View style={{ marginRight: "60%", marginTop: 10 }}>
      <TouchableOpacity onPress={props.method}>
        <MaterialCommunityIcons
          name="arrow-left"
          color="black"
          size={30}
          style={{ marginLeft: 15, marginRight: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
