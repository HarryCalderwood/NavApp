import React, { useState, Component, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles'
import MapModal from '../../components/modal';
import * as Index from '../../components/index';
import { Title, Text, Subheading, TextInput, Switch, Button, Headline } from 'react-native-paper';
import { addNewMarker, getGroupMarkers } from '../../../API/FirebaseFunctions';
import { Marker } from 'react-native-maps';
import * as firebase from 'firebase';

const DataUpload = ({ navigation }) => {


    const [pinName, setPinName] = useState('');
    const [pinDescription, setPinDescription] = useState('');
    const [pinLatitude, setPinLatitude] = useState('');
    const [pinLongitude, setPinLongitude] = useState('');
   

    const handlePress = () => {
        addNewMarker("Ballynahinch", "Safe passage to all NGOs", 54.402710887042254, -6.61196033274613,)

    };




    return (

        <View style={styles.center}>
            <View style={styles.flex1Container}>
                <Button mode="contained" onPress={handlePress}>
                    Upload Data
          </Button>

              



            </View>

        </View>


    );
};


export default DataUpload;