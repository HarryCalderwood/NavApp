import React, {useState, useEffect} from 'react'
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps'
import {StyleSheet, Dimensions} from 'react-native'
import { decode } from "@mapbox/polyline";
const height = Dimensions.get('window').height





const Map = () => {

    const getDirections = async (startLoc, destinationLoc) => {
        try {
          const KEY = "AIzaSyAW9tExu5mTcWMUMMNMoNJ1L8snwp0nHGw";
          let resp = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
          );
          let respJson = await resp.json();
          let points = decode(respJson.routes[0].overview_polyline.points);
          console.log(points);
          let coords = points.map((point, index) => {
            return {
              latitude: point[0],
              longitude: point[1]
            };
          });
          return coords;
        } catch (error) {
          return error;
        }
      };


          const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });

    const [coords, setCoords] = useState([]);
    
    useEffect(() => {
        getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
          .then(coords => setCoords(coords))
          .catch(err => console.log("Something went wrong"));
      }, []);
    
    
    return (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation
        initialRegion={{
            latitude: 52.5200066,
            longitude: 13.404954,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}
      
        >
            <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} 
            pinColor="black"
            />
             {coords.length > 0 && <Polyline coordinates={coords} />}
            </MapView>
    )
}


const styles = StyleSheet.create ({
    map: {
     height  
    }
})



export default Map