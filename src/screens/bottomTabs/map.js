import React, { useState, useEffect, Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import ImageZoom from "react-native-image-pan-zoom";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  Stylesheet,
  Keyboard,
  TouchableOpacity,
  Image,
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
  Subheading,
  Button,
  Appbar,
  Checkbox,
} from "react-native-paper";
// import { ScrollView } from "react-native-gesture-handler";
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
import { ScrollView } from "react-native-gesture-handler";

//Map Overlays:

const overlayOff = {
  coordinates: [
    { latitude: 54.537650021865126, longitude: -5.872410814965373 },
  ],
};
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
  fillColor: "#fa9393",
};

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        overlays: [overlayOff],
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
      imageDownloadURL: null,
      mapPin: null,
      mapPress: {},
      addModalVisible: false,
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

  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }

  onClickOverlayOff = () => {
    this.data = this.data

      // .update("blueStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, overlayOff));
  };

  onClickGreen = () => {
    this.data = this.data

      // .update("blueStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, greenZone));
  };

  onClickBlue = () => {
    this.data = this.data

      // .update("greenStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, blueZone));
  };

  onClickRed = () => {
    this.data = this.data

      // .update("greenStyles", (i) => i.pop())
      .update("overlays", (i) => i.set(0, redZone));
  };

  setAddModalVisible = (visible) => {
    this.setState({ addModalVisible: visible });
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
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => loggingOut() },
    ]);
  };

  _handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  _handleAddMarkerBackdropPress = () => {
    this.setState({ image: "../../images/placeholder.png" });
    this.setState({ mapPin: null });
    this.setAddModalVisible(false);
  };

  _handleInfoBackdropPress = () => {
    this.setInfoModalVisible(false);
    this.setState({ imageDownloadURL: null });
  };

  _handleLogoutPress = () => {
    loggingOut();
    navigation.replace("Login");
  };

  _handleLongMarkerPress = (e) => {
    this.setState({ mapPin: e.nativeEvent.coordinate });
    this.setAddModalVisible(true);
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
    // console.log(this.state.selectedMarkerInfo + "2");
    updateMarkers(
      this.state.selectedMarkerInfo.id,
      this.state.markerEditNameInput,
      this.state.markerEditDescriptionInput,
      firebase.firestore.FieldValue.serverTimestamp()
    );
    this.setEditModalVisible(false);
  };

  _handleMarkerPress = (pin) => {
    // this.map.animateCamera(
    //   { center: pin.latitude & pin.longitude },
    //   { duration: 2000 }
    // );
    this.setState({ selectedMarkerInfo: pin });
    this.setState({ infoModalVisible: true });
    var imgLocation = pin.imagePath;
    if (imgLocation !== undefined) {
      var storageRef = firebase.storage().ref();

      var storeImageRef = storageRef.child("" + imgLocation + "");
      storeImageRef
        .getDownloadURL()
        .then((url) => {
          if (url !== undefined) {
            this.setState({ imageDownloadURL: url });
          }
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        });
    }
  };

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var storageRef = firebase.storage().ref();
    const imgUploadID = Math.floor(Math.random() * Math.floor(10000000));
    var imgRef = storageRef.child("" + imgUploadID + "");

    var fileName = imgRef.name;
    this.setState({ imagePath: fileName });

    return imgRef.put(blob);
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

  //  {/* {this.state.image && ( */}

  _renderPickedImage = () => {
    if (this.state.image == null) {
      return (
        <Image
          source={require("../../images/placeholder.png")}
          style={{ width: 180, height: 180 }}
        />
      );
    } else {
      return (
        <Image
          source={{ uri: this.state.image }}
          style={{ width: 150, height: 150 }}
        />
      );
    }
  };

  renderInfoImage = () => {
    if (this.state.imageDownloadURL !== null) {
      return (
        <ImageZoom
          cropWidth={350}
          cropHeight={350}
          imageWidth={300}
          imageHeight={300}
        >
          <Image
            source={{ uri: this.state.imageDownloadURL }}
            style={{ width: 300, height: 300 }}
          />
        </ImageZoom>
      );
    } else {
      return <Text>No media files stored</Text>;
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    });
    // console.log(result + "5");
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  changeImage(selectedPic) {
    this.setState({ selectedImage: selectedPic });
  }

  _handleInputName = (text) => {
    this.setState({ mapPinName: text });
  };

  _handleInputDescription = (text) => {
    this.setState({ mapPinDescription: text });
  };

  _saveNewMarker = async () => {
    this.setAddModalVisible(false);
    await this.uploadImage(this.state.image);

    addNewMarker(
      this.state.mapPinName,
      this.state.mapPinDescription,
      this.state.mapPin.latitude,
      this.state.mapPin.longitude,
      firebase.firestore.FieldValue.serverTimestamp(),
      this.state.imagePath
    );
    // console.log("Save path" + this.state.imagePath);
    // console.log("new marker added");
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
    const { overlays } = this.data.toJS();
    const { navigation } = this.props;
    const { addModalVisible } = this.state;
    const { infoModalVisible } = this.state;
    const { editModalVisible } = this.state;
    this.componentDidMount();

    return (
      <View style={styles.container}>
        <Appbar.Header>
          {/* <Appbar.Content title="Desk Officer" /> */}

          {/* <MaterialCommunityIcons name="camera" color="white" size={26} /> */}
          <Button
            mode="contained"
            onPress={this.onClickGreen}
            title="Blue Zone"
          >
            Green Zone
          </Button>
          <Button mode="contained" onPress={this.onClickBlue}>
            Blue Zone
          </Button>
          <Button mode="contained" onPress={this.onClickRed}>
            Red Zone
          </Button>
          <Button mode="contained" onPress={this.onClickOverlayOff}>
            Clear
          </Button>
          <Appbar.Action icon="logout" onPress={this.logoutAlert} />
        </Appbar.Header>

        <View style={styles.flex4Container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={(map) => (this._map = map)}
            style={styles.mapView}
            showsUserLocation={true}
            initialRegion={this.state.mapRegion}
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
              <Marker
                onPress={() => this._handleMarkerPress(pin)}
                key={index}
                coordinate={{
                  latitude: pin.latitude,
                  longitude: pin.longitude,
                }}
              ></Marker>
            ))}
            {this.state.mapPin && <Marker coordinate={this.state.mapPin} />}
          </MapView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={addModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={this._handleAddMarkerBackdropPress}
          onBackdropPress={this._handleAddMarkerBackdropPress}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.modalCard}>
              <View style={styles.flex1Container}>
                {/* <View style={{ alignItems: "center", flex: 1 }}> */}
                <Button mode="contained" onPress={this._pickImage}>
                  Add image
                </Button>
                <View>{this._renderPickedImage()}</View>
              </View>
              {/* </View> */}

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
                  numberOfLines={10}
                  label="Marker Description"
                  onChangeText={this._handleInputDescription}
                  maxLength={1000}
                  allowFontScaling={true}
                  blurOnSubmit={true}
                />
                <Text>Has the information been verified as correct?</Text>
              </View>

              <View style={styles.flex1Container}>
                <Button mode="contained" onPress={this._saveNewMarker}>
                  Save
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={infoModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          onSwipeComplete={this._handleInfoBackdropPress}
          onBackdropPress={this._handleInfoBackdropPress}
        >
          <View style={styles.infoModalCard}>
            <View style={styles.infoModalTextContainer}>
              <Title>{this.state.selectedMarkerInfo.name}</Title>
              <ScrollView style={{ height: 40 }}>
                <TouchableOpacity>
                  <Text>{this.state.selectedMarkerInfo.description}</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10 }}>
                  Information recorded at
                  {/* {toDate(this.state.selectedMarkerInfo.timestamp).toDateString()} */}
                </Text>
              </ScrollView>
            </View>
            <View style={styles.flex1Container}>{this.renderInfoImage()}</View>
            <View style={styles.flexHalfContainer}>
              <Button
                style={{ marginTop: 20 }}
                mode="contained"
                onPress={this._handleEditPress}
              >
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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.editModalCard}>
              <View style={styles.flex1Container}>
                <Title>Edit Marker Information</Title>
                <TextInput
                  mode="outlined"
                  style={styles.textInput}
                  onChangeText={this._handleEditName}
                  maxLength={320}
                  value={this.state.markerEditNameInput}
                />
              </View>

              <TextInput
                mode="outlined"
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                onChangeText={this._handleEditDescription}
                maxLength={1000}
                allowFontScaling={true}
                blurOnSubmit={true}
                value={this.state.markerEditDescriptionInput}
              />

              <View style={styles.flex1Container}>
                <Text>Has the information been verified as correct?</Text>
                <Button mode="contained" onPress={this._handleEditUpdate}>
                  Save Changes
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}
