import * as React from 'react';
import { Button } from 'react-native-paper';
import styles from '../styles/styles';

const CameraButton = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Camera
  </Button>
);

export default CameraButton;