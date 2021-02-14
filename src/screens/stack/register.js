import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, KeyboardAvoidingView,ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles/styles'
import MapModal from '../../components/modal';
import * as Index from '../../components/index';
import { Title, Checkbox, Subheading, Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Register = ({ navigation }) => {

    const [text, setText] = React.useState('');
    const [forename, onChangeForename] = React.useState('Forename');
    const [surname, onChangeSurname] = React.useState('Surname');
    const [newEmail, onChangeNewEmail] = React.useState('Email');
    const [newPassword, onChangeNewPassword] = React.useState('Password');
    const [checked, setChecked] = React.useState(false);
    var bgImg = require('../../images/splashBackground.jpeg');

    return (
       
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           
                <View style={styles.center}>

                    <ImageBackground
                        source={bgImg}
                        style={styles.backgroundImage}
                    >
                      
                        <View style={styles.headerContainer} />
                        <ScrollView>
                        <View style={styles.flex2Container}>
                            <Title>Register a new account</Title>
                        </View>

                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Forename"
                                onChangeText={text => onChangeForename(text)}
                                forename={forename}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Surname"
                                onChangeText={text => onChangeSurname(text)}
                                surname={surname}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.flex2Container}>

                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Email"
                                onChangeText={text => onChangeNewEmail(text)}
                                newEmail={newEmail}
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
                                label="Enter Password"
                                onChangeText={text => onChangeNewPassword(text)}
                                newPassword={newPassword}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>

                        <View style={styles.flex2Container}>
                            <TextInput
                                mode="outlined"
                                style={styles.textInput}
                                label="Please Re-enter Password"
                                onChangeText={text => onChangeNewPassword(text)}
                                newPassword={newPassword}
                                allowFontScaling={true}
                                blurOnSubmit={true}
                            />
                        </View>

                        <View style={styles.flex1Container}>
                            <Text>Please tick this box to confirm that you agree to our </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL('http://google.com')}>
                                terms and conditions
                        </Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>

                        <View style={styles.flex3Container}>
                            <Button mode="contained" onPress={() => console.log('Pressed')}>
                                Register
                        </Button>
                        </View>
                        </ScrollView>
                        <View style={styles.footerContainer} />
                      
                    </ImageBackground>
                
                </View>
                
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
       
    );
};
export default Register;