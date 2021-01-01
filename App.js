import React,  {Component} from 'react';
import Feed from './src/feed';
import Detail from './src/detail';

import Login from './src/screens/drawer/login';
import Maps from './src/screens/drawer/maps';
import Briefing from './src/screens/drawer/briefing';

import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import tab3 from './src/screens/tabs/tab3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {






    render() {       

        createHomeStack = () =>
        <Stack.Navigator>
            <Stack.Screen 
            name ="Feed" 
            component= {Feed} 
            options={{
                title: "Desk Officer",
                headerStyle: {backgroundColor: "black"},
                headerTintColor: "white"
            }}
            />
            <Stack.Screen 
            name ="Detail" 
            component= {Detail} 
            options={{
                title: "Detail",
                headerStyle: {backgroundColor: "black"},
                headerTintColor: "white"
            }}/>
              <Stack.Screen 
            name ="Maps" 
            component= {Maps} 
            options={{
                title: "Map",
                headerStyle: {backgroundColor: "black"},
                headerTintColor: "white"
            }}/>
              <Stack.Screen 
            name ="Briefing" 
            component= {Briefing} 
            options={{
                title: "Briefing",
                headerStyle: {backgroundColor: "black"},
                headerTintColor: "white"
            }}/>

            <Stack.Screen name ="Bottom Tabs" children= {createBottomTabs} />
            <Stack.Screen name ="Top Tabs" children= {createTopTabs} />
        </Stack.Navigator>
    
        createTopTabs = (props) => {
            return <MaterialTopTabs.Navigator>
                <MaterialTopTabs.Screen 
                name = "Tab 1" 
                component= {Tab1}
                options={{title:props.route.params.name}}
                />
                <MaterialTopTabs.Screen name = "Tab 2" component= {Tab2}/>
                <MaterialTopTabs.Screen name = "Tab 3" component= {Tab3}/>
            </MaterialTopTabs.Navigator>
        }
    
        createBottomTabs = () => {
            return <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen name = "Tab 1" component= {Tab1}/>
                <MaterialBottomTabs.Screen name = "Tab 2" component= {Tab2}/>
                <MaterialBottomTabs.Screen name = "Tab 3" component= {Tab3}/>
                </MaterialBottomTabs.Navigator>
        }
    

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={createHomeStack}/>
                    <Drawer.Screen name="Login" component={Login}/>
                    <Drawer.Screen 
                    name="Maps" 
                    component={Maps}
                    options={{
                        title: "Map",
                        headerStyle: {backgroundColor: "black"},
                        headerTintColor: "white"
                    }}
                    />
                    <Drawer.Screen name="Briefing" component={Briefing}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}