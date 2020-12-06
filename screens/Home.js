import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render(){
        return (
         <View style={styles.container}>
            <Text>Welcome to the homepage Map.</Text>
            <StatusBar style="auto" />
            <Button
            title="View Brief information"
            onPress={ () => {
              this.props.navigation.navigate("Brief");
            } } 
            />
         </View>
         );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
