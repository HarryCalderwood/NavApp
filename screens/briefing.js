import React from 'react'
import {View, Text, StyleSheet} from "react-native";
const Briefing = (props) => {
    return(
        <View style={styles.container}>
            <Text>Briefing</Text>
        </View>
    );
};

export default Briefing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });