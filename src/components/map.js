import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {StyleSheet, Dimensions} from 'react-native'
 
const height = Dimensions.get('window').height

const Map = () => {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });

    return (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation
        initialRegion={{
            latitude: 	54.583116,
            longitude: 	-5.786278,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        }}
        />
    )
}


const styles = StyleSheet.create ({
    map: {
        height
    }
})



export default Map