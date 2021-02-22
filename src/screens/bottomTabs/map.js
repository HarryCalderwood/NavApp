
import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { Alert, Stylesheet, TouchableOpacity, Image, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { styles } from '../../styles/styles';
import MapModal from '../../components/modal';
import * as Index from '../../components/index';
import { Card, Title, Paragraph, Text, Button, Appbar, Drawer } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as firebase from 'firebase';
import { loggingOut } from '../../../API/FirebaseFunctions';

const Map = ({ navigation }) => {

  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection('users')
        .doc(currentUserUID)
        .get();

      if (!doc.exists) {
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        setLastName(dataObj.lastName)
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.replace('Login');
  };

  state = {
    marker: [],
    card: [],
    coordinates: [
      {
        key: '1',
        name: 'Belfast Center',
        text: 'The capitol of Northern Ireland, the land of saints and scholars',
        latitude: 54.5773910388331,
        longitude: -5.93316118797817,
        image: require('../../images/BelCityCent.jpg'),
        date: '12.05.2020',
        time: '16.00',
        recordedBy: 'John Smith',

      },
      {
        key: '2',
        name: 'Cookstown',
        text: 'Possible enemy stronghold.',
        latitude: 54.422037190962506,
        longitude: -5.905058609965918,
        image: require('../../images/cookstown.jpg'),
        date: '10.10.2020',
        time: '11.05',
        recordedBy: 'John Rambo',

      },
      {
        key: '3',
        name: 'Ballynahinch',
        text: 'Safe passage to all NGOs.',
        latitude: 54.402710887042254,
        longitude: -6.61196033274613,
        image: require('../../images/Ballynahinch.jpg'),
        date: '01/02/2021',
        time: '22.30',
        recordedBy: 'Srgt Jennifer Thompson'
      },
      {
        key: '4',
        name: 'St Johns Castle',
        text: 'Overnight base for the squade',
        latitude: 54.70785132594203,
        longitude: -6.723754731546966,
        image: require('../../images/Armagh.jpg'),
        date: '30.09.2020',
        time: '00.02',
        recordedBy: 'Joe Bloggs'
      },
    ]
  }

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('More');

  const _handleMarkerPress = (markerKeyData) => {


  };
  const _handleLongMarkerPress = () => {
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={firstName + " " + lastName} subtitle="Green Jackets" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={handlePress} />
      </Appbar.Header>

      <Index.CameraButton />


      <View style={styles.flex4Container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          style={styles.mapView}
          showsUserLocation={true}
          initialRegion={{
            latitude: 54.60593633808052,
            longitude: -5.928698478469805,
            latitudeDelta: 0.43,
            longitudeDelta: 0.34,
          }}
          onRegionChangeComplete={(region) => {
            console.log(
              `Map center: latitude: ${region.latitude}${region.latitude}
                longitude: ${region.latitude}${region.longitude}`
            );
          }}
        >



          {
            this.state.coordinates.map(marker => (

              //
              <Marker
                key={marker.key}
                text={marker.text}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >

                <Callout>


                  onPress={() => this._handleMarkerPress(marker.key)}

                </Callout>
              </Marker>

            ))
          }

        </MapView>

      </View>


      <View style={styles.flex2Container}>
        <ScrollView>
          {
            this.state.coordinates.map(card => (

              <Card
                key={card.key}
                style={{ marginBottom: 10, width: 800, height: 300 }}
              >
                <Card.Title
                  title={card.name}
                  subtitle={'Recorded by ' + card.recordedBy + ' on ' + card.date + ' at ' + card.time}
                />
                <Card.Content>
                  <Paragraph>{card.text} </Paragraph>
                </Card.Content>
                <Card.Cover source={card.image} />
                <Card.Actions>
                  <Button>Edit</Button>
                </Card.Actions>
              </Card>

            ))

          }
        </ScrollView>
      </View>
    </View>
  );
};
export default Map