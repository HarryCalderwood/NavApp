//@refresh reset
import React, { useState, Component, useEffect, useDebugValue } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import {
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
import * as firebase from "firebase";
import apiKeys from "./constants/ApiKeys";
import { registerRootComponent } from "expo";

import Splash from "./src/screens/stack/splash";
import Login from "./src/screens/stack/login";
import Register from "./src/screens/stack/register";
import Logout from "./src/screens/stack/logout";
import LoadingScreen from "./src/screens/stack/LoadingScreen";
import ForgotPassword from "./src/screens/stack/ForgotPassword";
import DataUpload from "./src/screens/stack/DataUpload";
import AppCamera from "./src/screens/bottomTabs/AppCamera";

import Map from "./src/screens/bottomTabs/map";

import Settings from "./src/screens/bottomTabs/Settings";

import Tab1 from "./src/screens/topTabs/tab1";
import Tab2 from "./src/screens/topTabs/tab2";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "native-base";
import { styles } from "./src/styles/styles";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "black",
  },
};

const reducer = () => {};
const store = createStore(reducer);

const createTopTabs = (props) => {
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Tab 1" component={Tab1} />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
    </MaterialTopTabs.Navigator>
  );
};
LogBox.ignoreAllLogs();
createBottomTabs = (props) => {
  return (
    <MaterialBottomTabs.Navigator
      initialRouteName="Map"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#EB4D4B" }}
    >
      <MaterialBottomTabs.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ theme }) => (
            <MaterialCommunityIcons name="map-marker" color={theme} size={26} />
          ),
        }}
      />

      <MaterialBottomTabs.Screen
        name="AppCamera"
        component={AppCamera}
        visable={false}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ theme }) => (
            <MaterialCommunityIcons name="camera" color={theme} size={26} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ theme }) => (
            <MaterialCommunityIcons name="settings" color={theme} size={26} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={"Loading"}
            component={LoadingScreen}
            options={{
              title: "Loading",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Back to Login",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: "Back to Login",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="Map"
            component={createBottomTabs}
            options={{
              title: "Map",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

registerRootComponent(App);
