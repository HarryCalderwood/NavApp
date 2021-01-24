import React, { Component } from 'react';
import Home from './src/home';
import Detail from './src/detail';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Areas from './src/components/mapOverlays';
import Login from './src/screens/drawer/login';
import Briefing from './src/screens/drawer/briefing';
import Settings from './src/screens/drawer/settings';
import Logout from './src/screens/drawer/logout';



import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


createHomeStack = () =>
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title: "Desk Officer",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }}
        />
        <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
                title: "Detail",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }} />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                title: "Settings",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }} />
        <Stack.Screen
            name="Briefing"
            component={Briefing}
            options={{
                title: "Briefing",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }} />

        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
    </Stack.Navigator>

createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
            name="Tab 1"
            component={Tab1}
            options={{ title: props.route.params.name }}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
}

createBottomTabs = (props) => {
    return (
        <MaterialBottomTabs.Navigator
            initialRouteName="Home"
            activeColor="yellow"
            inactiveColor="white"
            shifting={false}
            barStyle={{ backgroundColor: 'black' }}
        >
            <MaterialBottomTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-marker" color={color} size={26} />
                    )
                }}
            />
            <MaterialBottomTabs.Screen
                name="Areas"
                component={Areas}
                options={{
                    tabBarLabel: 'Areas',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-marker-path" color={color} size={26} />
                    )
                }}

            />
            <MaterialBottomTabs.Screen
                name="New Location"
                component={Home}
                options={{
                    tabBarLabel: 'Add location',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
                    )
                }}
            />
            <MaterialBottomTabs.Screen
                name="Briefing"
                component={Briefing}
                options={{
                    tabBarLabel: 'Briefing',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information-outline" color={color} size={26} />
                    )
                }}
            />
            <MaterialBottomTabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={26} />
                    )
                }}

            />
        </MaterialBottomTabs.Navigator>
    );
}

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Desk Officer App",
                        headerStyle: { backgroundColor: "black" },
                        headerTintColor: "white"
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={createBottomTabs}
                    options={{
                        title: "Map",
                        headerStyle: { backgroundColor: "black" },
                        headerTintColor: "white"
                    }} />

            </Stack.Navigator>
        </NavigationContainer>

    );
}


