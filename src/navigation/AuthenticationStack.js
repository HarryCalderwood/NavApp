import React, { useState, Component, useEffect, useDebugValue } from 'react';
import { LogBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Splash from '../screens/stack/splash';
import Login from '../screens/stack/login';
import Register from '../screens/stack/register';
import Logout from '../screens/stack/logout';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from '../styles/styles';


const Stack = createStackNavigator();


const AuthenticationStack = ({ navigation }) => {

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
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerStyle: { backgroundColor: "black" },
                        headerTintColor: "white"
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: true,
                        title: "Register",
                        headerStyle: { backgroundColor: "black" },
                        headerTintColor: "white"
                    }} />

            </Stack.Navigator>

    );
};
export default AuthenticationStack;