import React, { useState, Component, useEffect, useDebugValue } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { LogBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';
import * as firebase from "firebase";

import Map from '../screens/bottomTabs/map';
import Areas from '../screens/bottomTabs/mapOverlays';
import Briefing from '../screens/bottomTabs/briefing';
import Settings from '../screens/bottomTabs/settings';

import Tab1 from '../src/screens/topTabs/tab1';
import Tab2 from '../src/screens/topTabs/tab2';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from '../styles/styles';


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

createBottomTabs = (props) => {
    return (

        <MaterialBottomTabs.Navigator
            initialRouteName="Map"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#EB4D4B' }}
        >
            <MaterialBottomTabs.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ theme }) => (
                        <MaterialCommunityIcons name="map-marker" color={theme} size={26} />
                    )
                }}
            />
            <MaterialBottomTabs.Screen
                name="Areas"
                component={Areas}
                options={{
                    tabBarLabel: 'Areas',
                    tabBarIcon: ({ theme }) => (
                        <MaterialCommunityIcons name="map-marker-path" color={theme} size={26} />
                    )
                }}

            />

            <MaterialBottomTabs.Screen
                name="Briefing"
                component={Briefing}
                options={{
                    tabBarLabel: 'Briefing',
                    tabBarIcon: ({ theme }) => (
                        <MaterialCommunityIcons name="information-outline" color={theme} size={26} />
                    )
                }}
            />
            <MaterialBottomTabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ theme }) => (
                        <MaterialCommunityIcons name="settings" color={theme} size={26} />
                    )
                }}

            />
        </MaterialBottomTabs.Navigator>
    );
}




const createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
            name="Tab 1"
            component={Tab1}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />

    </MaterialTopTabs.Navigator>
}

const AppStack = ({ navigation }) => {

    return (


        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    title: "Splash",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="Map"
                component={createBottomTabs}
                options={{
                    title: "Map",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white"
                }} />

        </Stack.Navigator>

    );
};
export default AppStack;