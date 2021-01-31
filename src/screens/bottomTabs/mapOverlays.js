import React, { Component } from 'react';
import { View, SafeAreaView, Text, Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { fromJS } from 'immutable';
import { styles } from '../../styles/styles';

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
  state = {
    data: fromJS({
      ipaStyles: [styles.ipaText, styles.boldText],
      stoutStyles: [styles.stoutText],
      overlays: [greenZone]
    })
  };

  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }

  onClickIpa = () => {
    this.data = this.data

      .update('ipaStyles', i => i.push(styles.boldText))

      .update('stoutStyles', i => i.pop())

      .update('overlays', i => i.set(0, greenZone));
  };


  onClickStout = () => {
    this.data = this.data
      .update('stoutStyles', i => i.push(styles.boldText))
      .update('ipaStyles', i => i.pop())
      .update('overlays', i => i.set(0, unitedNations));
  };

  render() {
    const { ipaStyles, stoutStyles, overlays } = this.data.toJS();
    return (

      <View style={styles.container}>

        <View style={styles.labelContainer}>
          <Text style={ipaStyles} onPress={this.onClickIpa}>
            Green Zone
          </Text>
          <Text style={stoutStyles} onPress={this.onClickStout}>
            United Nations
          </Text>
        </View>

        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
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
      </View>
    );
  }
}



