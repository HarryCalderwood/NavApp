
import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
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
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function forgotPassword(Email) {
  try {
    firebase.auth().sendPasswordResetEmail(Email)
    Alert.alert("Please check your email for password reset information");
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

var database = firebase.database();


function addNewMarker(uid, name, description,) {

  // A post entry.
  var markerData = {
    uid: uid,
    name: name,
    description: description
  };

  // Get a key for a new Post.
  var newMarkerKey = firebase.database().ref().child('mapMarker').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/mapMarker/' + newMarkerKey] = markerData;

  return firebase.database().ref().update(updates);
}