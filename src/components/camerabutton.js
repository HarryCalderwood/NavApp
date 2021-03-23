import * as React from 'react';
import { Button } from 'react-native-paper';
import styles from '../styles/styles';

const CameraButton = ({navigation}) => (
  <Button icon="camera" mode="contained" onPress={() => navigation.navigate('AppCamera')}>
    Camera
  </Button>
);

export default CameraButton;