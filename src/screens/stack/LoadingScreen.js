import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as firebase from 'firebase';
import { styles } from '../../styles/styles';

export default function LoadingScreen({ navigation }) {
    useEffect(
        () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.replace('Map');
                } else {
                    navigation.replace('Login');
                }
            });
        }
    );

    return (
        <View style={styles.flex1Container}>
            <ActivityIndicator size='large' />
        </View>
    );
}