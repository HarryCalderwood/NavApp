import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { fromJS } from 'immutable';
import { styles } from '../../styles/styles';
import * as Index from '../../components/index';
import { Appbar, Button } from 'react-native-paper';
const greenZone = {
  coordinates: [
    { name: 'Point 1', latitude: 54.5773910388331, longitude: -5.93316118797817 },
    { name: 'Point 2', latitude: 54.422037190962506, longitude: -5.905058609965918 },
    { name: 'Point 3', latitude: 54.402710887042254, longitude: -6.61196033274613 },
    { name: 'Point 4', latitude: 54.70785132594203, longitude: -6.723754731546966 },
  ],
  strokeColor: 'green',
  strokeWidth: 4,
  fillColor: '#d9f5d5'
};

const unitedNations = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
    { latitude: 54.62174342603727, longitude: -6.03977318797697 },
    { latitude: 54.857919843359, longitude: -5.965853272627698 },
  ],
  strokeColor: 'blue',
  strokeWidth: 4,
  fillColor: '#bfd6ff'
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
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Field Map" subtitle="Green Jackets" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>

        <View style={styles.labelContainer}>
          <Button mode="contained" color='green' title='Green Zone'onPress={this.onClickGreen} style={{height: '70%', flex:1}}>Green Zone</Button>
          <Button mode="contained" color='blue'title='Blue Zone' onPress={this.onClickBlue}style={{height: '70%', flex:1}}>Blue Zone</Button>
          <Button mode="contained" color='red'title='Red Zone' onPress={this.onClickBlue}style={{height: '70%',flex:1}}>Red Zone</Button>
        </View>
      <View style={styles.flex12Container}>
        <MapView
          style={styles.overlayMap}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 54.60593633808052,
            longitude: -5.928698478469805,
            latitudeDelta: 0.6,
            longitudeDelta: 0.6,
          }}
        >
          {overlays.map((v, i) => (
            <MapView.Polygon
              key={i}
              coordinates={v.coordinates}
              strokeColor={v.strokeColor}
              strokeWidth={v.strokeWidth}
         
            />
          ))}
        </MapView>
        </View>
      </View>
    );
  }
}



