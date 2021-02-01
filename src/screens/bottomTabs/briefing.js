import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from '../../styles/styles'
import { FontAwesome5 } from "@expo/vector-icons";


export default class Briefing extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }}>
                <TouchableOpacity
                    style={{ alignItems: "flex-end", margin: 20 }}
                    onPress={this.props.navigation.openDrawer}
                >
                    <FontAwesome5
                        name="bars"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>
                <View style={styles.center}>

                    <Text style={styles.title}>Briefing</Text>
                </View>
            </SafeAreaView>
        );
    }
}