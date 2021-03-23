import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    var db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
    });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Unable to login", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function forgotPassword(Email) {
  try {
    firebase.auth().sendPasswordResetEmail(Email);
    Alert.alert("Please check your email for password reset information");
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function addNewMarker(
  name,
  description,
  latitude,
  longitude,
  timestamp,
  imagePath
) {
  var db = firebase.firestore();

  db.collection("mapMarker")
    .add({
      name: name,
      description: description,
      longitude: longitude,
      latitude: latitude,
      timestamp: timestamp,
      imagePath: imagePath,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

export async function updateMarkers(id, name, description, timestamp) {
  var db = firebase.firestore();
  db.collection("mapMarker")
    .doc(id)
    .update({
      name: name,
      description: description,
      timestamp: timestamp,
    })
    .then(() => {
      console.log("Document successfully updated");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
