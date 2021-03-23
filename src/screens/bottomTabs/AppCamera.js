// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';
// import { styles } from '../../styles/styles';

// export default function AppCamera() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }


//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.flex1Container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}     
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }




import React, { useState, useEffect } from 'react';
import {Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Card, Title, Paragraph, Text, Appbar, Button } from 'react-native-paper';
import { styles } from '../../styles/styles';

export default function AppCamera({navigation}) {
 const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.props.data.changeImage(result.uri)
      
      setImage(result.uri);
    }
  };

  return (
    <View style= {styles.flex1Container}>

    
<View>
            <Button mode="contained" onPress={pickImage} >
              Add new image from storage
          </Button>
          </View>
          <View style = {{alignItems: 'center'}}>
          {image && <Image source={{ uri: this.props.data.selectedImage}} style={{ width: 70, height: 80 }} />}
          </View>
          <View >         
          </View>
         
          

      
    </View>
  );
}