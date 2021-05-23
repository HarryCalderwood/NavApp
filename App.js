import React, { useState, Component, useEffect, useDebugValue } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
// import store from "./store/store";
import { Provider } from "react-redux";

console.disableYellowBox = true;
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
import * as firebase from "firebase";
import apiKeys from "./constants/ApiKeys";

import Splash from "./src/screens/stack/splash";
import Login from "./src/screens/stack/login";
import Register from "./src/screens/stack/register";
import LoadingScreen from "./src/screens/stack/LoadingScreen";
import ForgotPassword from "./src/screens/stack/ForgotPassword";
import Camera from "./src/screens/stack/camera";
import Map from "./src/screens/bottomTabs/map";
import Settings from "./src/screens/bottomTabs/settings";
import Briefing from "./src/screens/bottomTabs/briefing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "black",
  },
};

const themeSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
  if (isSwitchOn) {
    console.log("on");
  }
};

bottomTabNavigator = (props) => {
  return (
    <MaterialBottomTabs.Navigator initialRouteName="Map">
      <MaterialBottomTabs.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ theme }) => (
            <MaterialCommunityIcons name="map-marker" color={theme} size={26} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Briefing"
        component={Briefing}
        options={{
          tabBarLabel: "Briefing",
          tabBarIcon: ({ theme }) => (
            <MaterialCommunityIcons
              name="information"
              color={theme}
              size={26}
            />
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
            name="Camera"
            component={Camera}
            options={{
              title: "",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="Map"
            component={bottomTabNavigator}
            options={{
              gestureEnabled: false,
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
