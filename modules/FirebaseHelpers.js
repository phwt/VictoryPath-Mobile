import firebase from "firebase";
import { firebaseConfig } from "../App";

export const initializeFirebase = () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
};

export const setupDemoUser = async () => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword("jesttestuser@test.com", "P@ssw0rd");
  await firebase.auth().signOut();
};

export const teardownDemoUser = async () => {
  await firebase
    .auth()
    .signInWithEmailAndPassword("jesttestuser@test.com", "P@ssw0rd");
  await firebase.auth().currentUser.delete();
};
