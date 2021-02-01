import React, { Component } from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
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
  strokeWidth: 4,
  fillColor: '232, 252, 227'
};

const unitedNations = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
    { latitude: 54.62174342603727, longitude: -6.03977318797697 },
    { latitude: 54.857919843359, longitude: -5.965853272627698 },
  ],
  strokeColor: 'blue',
  strokeWidth: 4,
  fillColor: '224, 246, 255'
};

export default class PlottingOverlays extends Component {
  state = {
    data: fromJS({
      greenStyles: [styles.greenText, styles.boldText],
      blueStyles: [styles.blueText],
      overlays: [greenZone]
    })
  };

  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }

  onClickGreen = () => {
    this.data = this.data
      .update('greenStyles', i => i.push(styles.boldText))
      .update('blueStyles', i => i.pop())
      .update('overlays', i => i.set(0, greenZone));
  };


  onClickBlue = () => {
    this.data = this.data
      .update('blueStyles', i => i.push(styles.boldText))
      .update('greenStyles', i => i.pop())
      .update('overlays', i => i.set(0, unitedNations));
  };

  render() {
    const { greenStyles, blueStyles, overlays } = this.data.toJS();
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.labelContainer}>
          <Button color='green' title='Green Zone' style={greenStyles} onPress={this.onClickGreen} />
          <Button color='blue' title='Blue Zone' style={blueStyles} onPress={this.onClickBlue} />
        </View>

        <MapView
          style={styles.overlayMap}
          provider={PROVIDER_GOOGLE}
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



