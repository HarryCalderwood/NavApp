import React, { useState, useEffect, Component } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Callout, Polygon } from 'react-native-maps'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'

import { styles } from '../styles/styles';
import Carousel from 'react-native-snap-carousel';



const Map = () => {


  state = {
    marker: [],
    coordinates: [
      { name: 'Belfast Center', latitude: 54.5773910388331, longitude: -5.93316118797817, image: require('../images/BelCityCent.jpg') },
      { name: 'Cookstown', latitude: 54.422037190962506, longitude: -5.905058609965918, image: require('../images/cookstown.jpg') },
      { name: 'Ballynahinch', latitude: 54.402710887042254, longitude: -6.61196033274613, image: require('../images/Ballynahinch.jpg') },
      { name: 'St Johns Castle', latitude: 54.70785132594203, longitude: -6.723754731546966, image: require('../images/Armagh.jpg') },
    ]
  }
        
  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];
 
    this._map.animateToRegion({
      latitude: location.latitude, 
      longitude: location.longitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.035


    })

    this.state.markers[index].showCallout()
  }


  renderCarouselItem = ({ item }) => 
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
    
    



  return (
    <View style={styles.container}>
      <MapView
        ref={map=> this._map=map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsPointsOfInterest={true}
      >

        <MapView.Marker
          draggable
          title="Belfast City Hall"
          description="Historic meeting place. Over 200 year old building."
          coordinate={{
            latitude: 54.59658111383503,
            longitude: -5.929401353654955
          }}>

            
        </MapView.Marker>

        {
          this.state.coordinates.map(marker => (
            <Marker
             
              key={marker.name}
              ref={ref=> this.state.markers[index]=ref}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            >
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))
        }

      </MapView>
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.coordinates}
        containerCustomStyle={styles.carousel}
        renderItem={this.renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        itemHeight={200}
        onSnapToItem={(index)=>this.onCarouselItemChange(index)}
      />
    </View>
  )
}


export default Map