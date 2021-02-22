import React, {useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as firebase from 'firebase';
import { styles } from '../../styles/styles';
import { forgotPassword } from '../../../API/FirebaseFunctions';
import { Title, Text, Subheading, TextInput, Switch, Button, Headline } from 'react-native-paper';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handlePress = () => {
        if (!email) {
            Alert.alert('Email field is required.');
        }

        forgotPassword(email);
    };

    return (
        <View style={styles.flex1Container}>
            <View style={styles.flex2Container} >

                <TextInput
                    mode="outlined"
                    style={styles.textInput}
                    label="Please enter your email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    textContentType={'emailAddress'}
                    maxLength={320}
                />
            </View>

            <View style={styles.flex1Container}>
                <Button mode="contained" onPress={handlePress}>
                    Send password reset
          </Button>
            </View>

        </View >
    );
}

export default ForgotPassword;