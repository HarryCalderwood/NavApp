import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './screens/index';
const {Screen, Navigator} = createStackNavigator();

const App = (props) => (
<NavigationContainer>
  <Navigator screenOptions = {{headerShown: false,}}>
    <Screen name = "Login" component={Screens.Login}/>
    <Screen name = "Home" component={Screens.Home}/>
    <Screen name = "Briefing" component={Screens.Briefing}/>
  </Navigator>
</NavigationContainer>
);



export default App;