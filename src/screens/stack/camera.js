import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { styles } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function camera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.cameraContainer}>
      <Camera style={{ flex: 1 }} type={type}>
        <View style={styles.cameraFlipButton}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              color="white"
              size={30}
              style={{ marginLeft: 15, marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
