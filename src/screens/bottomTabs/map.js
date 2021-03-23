import React, { useState, useEffect, Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import {
  Alert,
  Stylesheet,
  Keyboard,
  TouchableOpacity,
  Image,
  Pressable,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { fromJS } from "immutable";
import { styles } from "../../styles/styles";
import MapModal from "../../components/modal";
import * as Index from "../../components/index";
import {
  Title,
  Text,
  TextInput,
  Button,
  Appbar,
  Checkbox,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as firebase from "firebase";
import {
  loggingOut,
  addNewMarker,
  updateMarkers,
} from "../../../API/FirebaseFunctions";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import { LocalHospital } from "@material-ui/icons";
import AppCamera from "./AppCamera";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//Map Overlays:

const greenZone = {
  coordinates: [
    {
      name: "Point 1",
      latitude: 54.5773910388331,
      longitude: -5.93316118797817,
    },
    {
      name: "Point 2",
      latitude: 54.422037190962506,
      longitude: -5.905058609965918,
    },
    {
      name: "Point 3",
      latitude: 54.402710887042254,
      longitude: -6.61196033274613,
    },
    {
      name: "Point 4",
      latitude: 54.70785132594203,
      longitude: -6.723754731546966,
    },
  ],
  strokeColor: "green",
  strokeWidth: 4,
  fillColor: "#d9f5d5",
};

const blueZone = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
    { latitude: 54.62174342603727, longitude: -6.03977318797697 },
    { latitude: 54.857919843359, longitude: -5.965853272627698 },
  ],
  strokeColor: "blue",
  strokeWidth: 4,
  fillColor: "#bfd6ff",
};

const redZone = {
  coordinates: [
    { latitude: 54.6350617516698, longitude: -5.611949036278302 },
    { latitude: 54.49081633726614, longitude: -5.6840391413021845 },
    { latitude: 54.52610522896239, longitude: -5.846595260473687 },
    { latitude: 54.591677902781264, longitude: -5.862144106655308 },
  ],
  strokeColor: "red",
  strokeWidth: 4,
  fillColor: "red",
};

const overlayOff = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
  ],
};

// let currentUserUID = firebase.auth().currentUser.uid;

// useEffect(() => {
//   async function getUserInfo() {
//     let doc = await firebase
//       .firestore()
//       .collection('users')
//       .doc(currentUserUID)
//       .get();

//     if (!doc.exists) {
//       Alert.alert('No user data found!')
//     } else {
//       let dataObj = doc.data();
//       setFirstName(dataObj.firstName)
//       setLastName(dataObj.lastName)
//     }
//   }

// })

// const getUserInformation = () => {
//   let currentUserUID = firebase.auth().currentUser.uid;
//       let doc = firebase
//         .firestore()
//         .collection('users')
//         .doc(currentUserUID)
//         .get();

//       if (!doc.exists) {
//         Alert.alert('No user data found!')
//       } else {
//         let dataObj = doc.data();
//         let fName=(dataObj.firstName)
//         this.setState({firstName:fName})
//         let lName=(dataObj.lastName)
//         this.setState({lastName:lName})
//         }

// }

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        greenStyles: [styles.greenText, styles.boldText],
        blueStyles: [styles.blueText],
        overlays: [greenZone],
      }),
      firstName: "",
      lastName: "",
      mapPinName: "",
      mapPinDescription: "",
      markerEditNameInput: "",
      markerEditDescriptionInput: "",
      markerList: [],
      selectedImagePath: "",
      markerInfoLatitude: "",
      markerInfoLongitude: "",
      image: null,
      selectedMarkerInfo: {},
      marker: [],
      imagePath: "",
      imageDownloadURL: "",
      mapPin: null,
      mapPress: {},
      pin: [],
      // hasPermission: null,
      // type: Camera.Constants.Type.back,
      x: [],
      coordinates: [
        {
          key: "1",
          name: "Belfast Center",
          text:
            "The capitol of Northern Ireland, the land of saints and scholars",
          latitude: 54.5773910388331,
          longitude: -5.93316118797817,
          image: require("../../images/BelCityCent.jpg"),
          date: "12.05.2020",
          time: "16.00",
          recordedBy: "John Smith",
        },
        {
          key: "2",
          name: "Cookstown",
          text: "Possible enemy stronghold.",
          latitude: 54.422037190962506,
          longitude: -5.905058609965918,
          image: require("../../images/cookstown.jpg"),
          date: "10.10.2020",
          time: "11.05",
          recordedBy: "John Rambo",
        },
        {
          key: "3",
          name: "Ballynahinch",
          text: "Safe passage to all NGOs.",
          latitude: 54.402710887042254,
          longitude: -6.61196033274613,
          image: require("../../images/Ballynahinch.jpg"),
          date: "01/02/2021",
          time: "22.30",
          recordedBy: "Srgt Jennifer Thompson",
        },
        {
          key: "4",
          name: "St Johns Castle",
          text: "Overnight base for the squade",
          latitude: 54.70785132594203,
          longitude: -6.723754731546966,
          image: require("../../images/Armagh.jpg"),
          date: "30.09.2020",
          time: "00.02",
          recordedBy: "Joe Bloggs",
        },
      ],
      modalVisible: false,
      infoModalVisible: false,
      editModalVisible: false,
      mapRegion: {
        latitude: 54.60593633808052,
        longitude: -5.928698478469805,
        latitudeDelta: 0.43,
        longitudeDelta: 0.34,
      },
    };
  }
  //overlays

  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }

  onClickOverlayOff = () => {
    this.data = this.data
      .update("greenStyles", (i) => i.push(styles.boldText))
      .update("blueStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, overlayOff));
  };

  onClickGreen = () => {
    this.data = this.data
      .update("greenStyles", (i) => i.push(styles.boldText))
      .update("blueStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, greenZone));
  };

  onClickBlue = () => {
    this.data = this.data
      .update("blueStyles", (i) => i.push(styles.boldText))
      .update("greenStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, blueZone));
  };

  onClickRed = () => {
    this.data = this.data
      .update("blueStyles", (i) => i.push(styles.boldText))
      .update("greenStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, redZone));
  };

  // map functions
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setInfoModalVisible = (visible) => {
    this.setState({ infoModalVisible: visible });
  };

  setEditModalVisible = (visible) => {
    this.setState({ editModalVisible: visible });
  };

  logoutAlert = () => {
    Alert.alert("Log out", "Do you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => loggingOut() },
    ]);
  };

  _handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  _handleBackdropPress = () => {
    this.setModalVisible(false);
    this.setState({ mapPin: null });
    this.setState({ image: null });
  };

  _handleLogoutPress = () => {
    loggingOut();
    navigation.replace("Login");
  };

  _handleLongMarkerPress = (e) => {
    this.setState({ mapPin: e.nativeEvent.coordinate });
    this.setModalVisible(true);
    console.log(e.nativeEvent.coordinate.latitude);
  };

  _handleEditPress = () => {
    this.setEditModalVisible(true);
    this.setInfoModalVisible(false);
    this.setState({ markerEditNameInput: this.state.selectedMarkerInfo.name });
    this.setState({
      markerEditDescriptionInput: this.state.selectedMarkerInfo.description,
    });
  };

  _handleEditName = (text) => {
    this.setState({ markerEditNameInput: text });
  };

  _handleEditDescription = (text) => {
    this.setState({ markerEditDescriptionInput: text });
  };

  _handleEditUpdate = () => {
    console.log(this.state.selectedMarkerInfo);
    updateMarkers(
      this.state.selectedMarkerInfo.id,
      this.state.markerEditNameInput,
      this.state.markerEditDescriptionInput,
      firebase.firestore.FieldValue.serverTimestamp()
    );
    this.setEditModalVisible(false);
  };

  //Image handle

  // getImgDownloadURL = () => {
  //   var storageRef = firebase.storage().ref();
  //   var imgLocation = this.state.selectedMarkerInfo.imagePath;
  //   console.log(imgLocation);
  //   var storeImageRef = storageRef.child("" + imgLocation + "");
  //   storeImageRef
  //     .getDownloadURL()
  //     .then((url) => {
  //       var pinUrl = url;
  //       this.setState({ imageDownloadURL: pinUrl });
  //       console.log(imgDownldURL);
  //       // Insert url into an <img> tag to "download"
  //     })
  //     .catch((error) => {
  //       // A full list of error codes is available at
  //       // https://firebase.google.com/docs/storage/web/handle-errors
  //       switch (error.code) {
  //         case "storage/object-not-found":
  //           // File doesn't exist
  //           break;
  //         case "storage/unauthorized":
  //           // User doesn't have permission to access the object
  //           break;
  //         case "storage/canceled":
  //           // User canceled the upload
  //           break;

  //         // ...

  //         case "storage/unknown":
  //           // Unknown error occurred, inspect the server response
  //           break;
  //       }
  //     });
  // };

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var storageRef = firebase.storage().ref();
    const imgUploadID = Math.floor(Math.random() * Math.floor(10000000));
    var imgRef = storageRef.child("" + imgUploadID + "");

    var fileName = imgRef.name;
    this.setState({ imagePath: fileName });

    return imgRef.put(blob);

    //     uploadTask.on('state_changed',

    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     Alert.alert(
    //       "We are saving your map marker",
    //       'Upload is ' + progress + '% done',

    //       // {
    //       //   text: "Cancel",
    //       //   onPress: () => {uploadTask.cancel()},
    //       //   style: "cancel"
    //       // },
    //     );

    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log('Upload is paused');
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log('Upload is running');@n
    //         break;
    //     }
    //   },
    //   (error) => {
    //     Alert.alert(
    //       "Something went wrong. Your map marker has not been added.",
    //     );
    //   },
    //   () => {

    //    console.log("upload path" + this.state.imagePath)
    //   }
    // );
  };

  requestPermission = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  pickImage = async () => {
    // if (Platform.OS !== 'web') {
    //   let status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert('Sorry, we need camera roll permissions to make this work!');
    //   }
    // }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  changeImage(selectedPic) {
    this.setState({ selectedImage: selectedPic });
  }

  //Input New Marker
  _handleInputName = (text) => {
    this.setState({ mapPinName: text });
  };

  _handleInputDescription = (text) => {
    this.setState({ mapPinDescription: text });
  };

  _saveNewMarker = async () => {
    this.setModalVisible(false);
    await this.uploadImage(this.state.image);

    addNewMarker(
      this.state.mapPinName,
      this.state.mapPinDescription,
      this.state.mapPin.latitude,
      this.state.mapPin.longitude,
      firebase.firestore.FieldValue.serverTimestamp(),
      this.state.imagePath
    );
    console.log("Save path" + this.state.imagePath);
    console.log("new marker added");
  };

  componentDidMount() {
    var db = firebase.firestore();
    const markers = [];
    db.collection("mapMarker")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((marker) => {
          let currentID = marker.id;
          let obj = { ...marker.data(), ["id"]: currentID };
          markers.push(obj);
        });
        this.setState({
          markerList: markers,
        });
      });
  }

  render() {
    const { greenStyles, blueStyles, overlays } = this.data.toJS();
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    const { infoModalVisible } = this.state;
    const { editModalVisible } = this.state;
    const { url } = this.state;
    this.componentDidMount();

    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Desk Officer" />
          <Pressable
            onPress={this.onClickOverlayOff}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(94, 184, 95)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}>Hide overlays</Text>
          </Pressable>
          <Pressable
            onPress={this.onClickGreen}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(94, 184, 95)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}>Green</Text>
            {/* <Button mode="contained">Green Zone</Button> */}
          </Pressable>
          <Pressable
            onPress={this.onClickBlue}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(48, 107, 227)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}> Blue </Text>
          </Pressable>

          <Pressable
            onPress={this.onClickRed}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(230, 67, 46)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 18 }}> Red </Text>
          </Pressable>
          <Appbar.Action icon="logout" onPress={this.logoutAlert} />
        </Appbar.Header>

        {/* //<Index.CameraButton /> */}

        <View style={styles.flex4Container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={(map) => (this._map = map)}
            style={styles.mapView}
            showsUserLocation={true}
            initialRegion={this.state.mapRegion}
            // onRegionChange={this._handleMapRegionChange}
            onLongPress={this._handleLongMarkerPress}
            mapType="standard"
            zoomEnabled={true}
            pitchEnabled={true}
            followsUserLocation={true}
            showsCompass={true}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
          >
            {overlays.map((v, i) => (
              <MapView.Polygon
                key={i}
                coordinates={v.coordinates}
                strokeColor={v.strokeColor}
                strokeWidth={v.strokeWidth}
              />
            ))}

            {this.state.markerList.map((pin, index) => (
              // this.state.coordinates.map(pin => (
              <Marker
                onPress={() => {
                  // this.setState({ markerInfoLatitude: pin.latitude })
                  this.setState({ selectedMarkerInfo: pin });
                  this.setInfoModalVisible(true);

                  // if (pin.imagePath !== "") {
                  var storageRef = firebase.storage().ref();
                  var imgLocation = this.state.selectedMarkerInfo.imagePath;
                  console.log(imgLocation);
                  var storeImageRef = storageRef.child("" + imgLocation + "");
                  storeImageRef
                    .getDownloadURL()
                    .then((url) => {
                      var pinUrl = url;
                      this.setState({ imageDownloadURL: pinUrl });
                      console.log(pinUrl);

                      // Insert url into an <img> tag to "download"
                    })
                    .catch((error) => {
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                        case "storage/object-not-found":
                          // File doesn't exist
                          break;
                        case "storage/unauthorized":
                          // User doesn't have permission to access the object
                          break;
                        case "storage/canceled":
                          // User canceled the upload
                          break;

                        // ...

                        case "storage/unknown":
                          // Unknown error occurred, inspect the server response
                          break;
                      }
                    });
                  // }
                }}
                key={index}
                name={pin.name}
                text={pin.description}
                coordinate={{
                  latitude: pin.latitude,
                  longitude: pin.longitude,
                }}
              >
                {/* <Callout tooltip={false}>
                    <Text>{pin.name}{pin.description}</Text>
                    <Text>{pin.description}</Text>
                 </Callout> */}
              </Marker>
            ))}
            {this.state.mapPin && <Marker coordinate={this.state.mapPin} />}
          </MapView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={this._handleBackdropPress}
          onBackdropPress={this._handleBackdropPress}
          //
          // onDismiss={() => console.log('onDismiss!')}
        >
          <View style={styles.modalCard}>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Button mode="contained" onPress={this.pickImage}>
                Add image {URL}
              </Button>

              <View
                style={{ borderWidth: 3, borderColor: "black", marginTop: 1 }}
              >
                {this.state.image && (
                  <Image
                    source={{ uri: this.state.image }}
                    style={{ width: 80, height: 60 }}
                  />
                )}
              </View>
            </View>

            <View style={styles.flex1Container}>
              <TextInput
                mode="outlined"
                style={styles.textInput}
                label="Location Name"
                onChangeText={this._handleInputName}
                maxLength={320}
              />

              <TextInput
                mode="outlined"
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                label="Marker Description"
                onChangeText={this._handleInputDescription}
                maxLength={1000}
                allowFontScaling={true}
                blurOnSubmit={true}
              />

              <Text>
                Has the information been verified as correct?
                <Checkbox />
              </Text>
            </View>

            {/* <AppCamera data = {
                  {selectedImage: this.state.selectedImage, changeImage:this.changeImage.bind(this)}

                  
              }/> */}
            <View style={styles.flex1Container}>
              <Button mode="contained" onPress={this._saveNewMarker}>
                Save
              </Button>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={infoModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={() => this.setInfoModalVisible(false)}
          onBackdropPress={() => this.setInfoModalVisible(false)}
        >
          <View style={styles.modalMarkerCard}>
            <View style={styles.flex1Container}>
              <Title>{this.state.selectedMarkerInfo.name}</Title>
            </View>
            <View style={styles.flex1Container}>
              <Text>{this.state.selectedMarkerInfo.description}</Text>
            </View>
            <View style={styles.flex3Container}>
              {/* {this.state.imageDownloadURL && (
              <Image
                source={{ uri: this.state.imageDownloadURL }}
                style={{ width: 80, height: 60 }}
              />
              )} */}
            </View>

            <View style={styles.flex1Container}>
              <Button mode="contained" onPress={this._handleEditPress}>
                Edit
              </Button>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={editModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={() => this.setEditModalVisible(false)}
          onBackdropPress={() => this.setEditModalVisible(false)}
        >
          <View style={styles.modalMarkerCard}>
            <View style={styles.flex3Container}>
              <Title>Edit Marker Information</Title>
              <TextInput
                mode="outlined"
                style={styles.textInput}
                onChangeText={this._handleEditName}
                maxLength={320}
                value={this.state.markerEditNameInput}
              />
            </View>
            <View style={styles.flex3Container}>
              <TextInput
                mode="outlined"
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                onChangeText={this._handleEditDescription}
                maxLength={1000}
                allowFontScaling={true}
                blurOnSubmit={true}
                value={this.state.markerEditDescriptionInput}
              />
              <Text>
                Has the information been verified as correct?
                <Checkbox />
              </Text>
              <View style={styles.flex3Container}>
                <Button mode="contained" onPress={this._handleEditUpdate}>
                  Save changes
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
