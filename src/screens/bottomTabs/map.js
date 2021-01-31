import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { Text, Image, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { styles } from '../../styles/styles';

const Map = () => {
  state = {
    marker: [],
    coordinates: [
      { name: 'Belfast Center', text: 'The capitol of Northern Ireland, the land of saints and scholars', latitude: 54.5773910388331, longitude: -5.93316118797817, image: require('../../images/BelCityCent.jpg') },
      { name: 'Cookstown', text: 'Possible enemy stronghold.', latitude: 54.422037190962506, longitude: -5.905058609965918, image: require('../../images/cookstown.jpg') },
      { name: 'Ballynahinch', text: 'Safe passage to all NGOs.', latitude: 54.402710887042254, longitude: -6.61196033274613, image: require('../../images/Ballynahinch.jpg') },
      { name: 'St Johns Castle', text: 'Overnight base for the squade', latitude: 54.70785132594203, longitude: -6.723754731546966, image: require('../../images/Armagh.jpg') },
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
  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardText}>{item.text}</Text>
    </View>

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => this._map = map}
        style={styles.map}
        showsUserLocation={true}
      >

        {
          this.state.coordinates.map(marker => (
            <Marker
              key={marker.name}
              text={marker.text}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            >
              <Callout>
                <View style={styles.calloutContainer}>
                <Text>{marker.name}</Text>
                <Text>{marker.text}</Text>
                </View>
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
        onSnapToItem={(index) => this.onCarouselItemChange(index)}
      />

    </View>
  )
}

export default Map