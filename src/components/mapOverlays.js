import React, { Component } from 'react';
import { View, SafeAreaView, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { fromJS } from 'immutable';
import { color } from 'react-native-reanimated';





const height = Dimensions.get('window').height
// The "IPA" region coordinates and color...
const greenZone = {
  coordinates: [
    { name: 'Point 1', latitude: 54.5773910388331, longitude: -5.93316118797817 },
    { name: 'Point 2', latitude: 54.422037190962506, longitude: -5.905058609965918 },
    { name: 'Point 3', latitude: 54.402710887042254, longitude: -6.61196033274613 },
    { name: 'Point 4', latitude: 54.70785132594203, longitude: -6.723754731546966 },
  ],
  strokeColor: 'green',
  strokeWidth: 4
};

// The "stout" region coordinates and color...
const unitedNations = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
    { latitude: 54.62174342603727, longitude: -6.03977318797697 },
    { latitude: 54.857919843359, longitude: -5.965853272627698 },
  ],
  strokeColor: 'blue',
  strokeWidth: 4,
  fillColor: '#99c2ff'


};

export default class PlottingOverlays extends Component {
  // The "IPA" region is rendered first. So the "ipaStyles"
  // list has "boldText" in it, to show it as selected. The
  // "overlays" list has the "ipaRegion" in it.
  state = {
    data: fromJS({
      ipaStyles: [styles.ipaText, styles.boldText],
      stoutStyles: [styles.stoutText],
      overlays: [greenZone]
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }
  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // The "IPA" text was clicked...
  onClickIpa = () => {
    this.data = this.data
      // Makes the IPA text bold...
      .update('ipaStyles', i => i.push(styles.boldText))
      // Removes the bold from the stout text...
      .update('stoutStyles', i => i.pop())
      // Replaces the stout overlay with the IPA overlay...
      .update('overlays', i => i.set(0, greenZone));
  };

  // The "stout" text was clicked...
  onClickStout = () => {
    this.data = this.data
      // Makes the stout text bold...
      .update('stoutStyles', i => i.push(styles.boldText))
      // Removes the bold from the IPA text...
      .update('ipaStyles', i => i.pop())
      // Replaces the IPA overlay with the stout overlay...
      .update('overlays', i => i.set(0, unitedNations));
  };

  render() {
    const { ipaStyles, stoutStyles, overlays } = this.data.toJS();

    return (
      <SafeAreaView>

        <View style={styles.labelContainer}>

          {/* Text that when clicked, renders the IPA
               map overlay. */}
          <Text style={ipaStyles} onPress={this.onClickIpa}>
            Green Zone
          </Text>

          {/* Text that when clicked, renders the stout
               map overlay. */}
          <Text style={stoutStyles} onPress={this.onClickStout}>
            United Nations
          </Text>

        </View>

        {/* Renders the map with the "overlays" array. There
             will only ever be a single overlay in this
             array. */}
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
         followsUserLocations
         showsUserLocation
        >
          {overlays.map((v, i) => (
            <MapView.Polygon

              key={i}
              coordinates={v.coordinates}
              strokeColor={v.strokeColor}
              strokeWidth={v.strokeWidth}
              fillColor={v.fillColor}
            />

          ))}
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height
  },

  ipaText: {
    fontSize: 30,
    color: 'green'

  },

  boldText: {
    fontWeight: 'bold',
    alignItems: 'center'

  },

  stoutText: {
    fontSize: 30,
    color: 'blue'
  },

  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20

  }
})

