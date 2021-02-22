import React, { useState, useEffect, useContext } from 'react';
import { View, Keyboard, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles/styles'
import MapModal from '../../components/modal';
import * as Index from '../../components/index';
import { Title, Checkbox, Text, Subheading, Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../navigation/AuthProvider'
import * as firebase from "firebase";
import { registration } from '../../../API/FirebaseFunctions';






const Register = ({ navigation }) => {



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emptyState = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handlePress = () => {
        if (!firstName) {
            Alert.alert('First name is required');
        } else if (!email) {
            Alert.alert('Email field is required.');
        } else if (!password) {
            Alert.alert('Password field is required.');
        } else if (!confirmPassword) {
            setPassword('');
            Alert.alert('Confirm password field is required.');
        } else if (password !== confirmPassword) {
            Alert.alert('Password does not match!');
        } else {
            registration(
                email,
                password,
                lastName,
                firstName,
            );
            navigation.navigate('Loading');
            emptyState();
        }
    };



    const [checked, setChecked] = React.useState(false);
    var bgImg = require('../../images/splashBackground.jpeg');




    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.center}>



                    <View style={styles.headerContainer} />
                  
                        <View style={styles.flex2Container}>
                            <Title>Register a new account</Title>
                        </View>

                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="First Name"
                                onChangeText={(name) => setFirstName(name)}
                                value={firstName}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Last Name"
                                value={lastName}
                                onChangeText={(name) => setLastName(name)}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Enter your email"
                                onChangeText={(email) => setEmail(email)}
                                value={email}
                                textContentType={'emailAddress'}
                                maxLength={320}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>

                        <View style={styles.flex2Container}>
                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Enter your password"
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.flex2Container}>
                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Please Confirm Password"
                                value={confirmPassword}
                                onChangeText={(password2) => setConfirmPassword(password2)}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.flex1Container}>
                            <Text style={{marginTop:30}}>Please tick this box to confirm that you agree to our <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL('http://google.com')}>
                                terms and conditions
                        </Text>
                        </Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>

                        <View style={styles.flex3Container}>
                            <Button mode="contained" onPress= { handlePress }>
                                Register
                        </Button>
                        </View>
                        <View style={styles.flex1Container}>
                            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                                <Text>Have an account? Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    
                    <View style={styles.footerContainer} />


                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
};
export default Register;