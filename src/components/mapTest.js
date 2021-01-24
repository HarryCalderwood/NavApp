import React, {useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps'
import {Text, View,StyleSheet} from 'react-native'
import { decode } from "@mapbox/polyline";
import { fromJS } from 'immutable';
import 




const Map = () => {
    
    return (
      <View>
        <MapView
         provider={PROVIDER_GOOGLE}
        initialregion={{
          latitude: 54.59677904140637,  
          longitude: -5.930167898998653,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}
        style={styles.map}  
        >
           
           <MapView.Marker
            title="Duff Brewery"
            description="Duff beer for me, Duff beer for you"
            coordinate={{
              latitude: 43.8418728,
              longitude: -79.086082
            }}
          />
            </MapView>
            </View>
    )
}


const styles = StyleSheet.create ({
    map: {
        height: '100%',
         justifyContent: 'flex-end',
    
       }
})

export default Map