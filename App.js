import React,  {Component} from 'react';
import Home from './src/home';
import Detail from './src/detail';

import {Icon} from '@expo/vector-icons/Octicons';

import Login from './src/screens/drawer/login';
import Briefing from './src/screens/drawer/briefing';
import Settings from './src/screens/drawer/settings';
import Logout from './src/screens/drawer/logout';


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
const MenuIcon = ({ navigate }) => <Icon 
name='three-bars' 
size={30} 
color='#000' 
onPress={() => navigate('DrawerOpen')}
/>;

const Nav= {
    FirstView: {
        screen: Login,
        navigationOptions: ({ Drawer }) => ({
            headerRight: MenuIcon(Drawer)
        })
    }
};


export default class App extends Component {

    render() {       
        createHomeStack = () =>
        <Stack.Navigator>
            <Stack.Screen 
            name ="Home" 
            component= {Home} 
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
            name ="Settings" 
            component= {Settings} 
            options={{
                title: "Settings",
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
                <Drawer.Navigator drawerStyle={{
                     backgroundColor: 'black',
                     width: 200,
                }} drawerContentOptions={{
                    activeTintColor: '#D2D2D2',
                    inactiveTintColor: 'white',
                    itemStyle: { marginVertical: 5 },
                  }}
                  
                 >
                    
                    <Drawer.Screen name="Home" component={Home}/> 
                    <Drawer.Screen name="Briefing" component={Briefing}/>
                    <Drawer.Screen name="Settings" component={Settings}/>
                    <Drawer.Screen name="Logout" component={Logout}/>
                </Drawer.Navigator>
            </NavigationContainer>
           
        );
    }
}
