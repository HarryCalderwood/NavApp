import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import AuthenticationStack from './AuthenticationStack';
import AppStack from './AppStack';

const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null; //Takes a fraction of a second and therefore no loading screen required. 

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthenticationStack />}
        </NavigationContainer>

    );

};

export default Routes; 