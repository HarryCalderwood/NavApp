import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

export default class DrawerBurger extends React.Component {
    render() {

        return (
            <TouchableOpacity
                style={{ alignItems: "flex-end", margin: 10 }}
                onPress={this.props.navigation.openDrawer}
            >
                <FontAwesome5 name="bars" size={30} color="black" />

            </TouchableOpacity>

        );
    }
}




