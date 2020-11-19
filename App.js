import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImagePropTypes,
} from "react-native";
import "firebase/firestore";
import { YellowBox } from "react-native";
import GamesNavigator from "./navigation/navigator";
import GameScreen from "./screen/gamescreen";
import firebase from "firebase";

YellowBox.ignoreWarnings(["Setting a timer"]);

var firebaseConfig = {
  apiKey: "AIzaSyAN_QaruL59j_7MhK8rmJoZOMUpVbXraEI",
  authDomain: "victorypath-b33ae.firebaseapp.com",
  databaseURL: "https://victorypath-b33ae.firebaseio.com",
  projectId: "victorypath-b33ae",
  storageBucket: "victorypath-b33ae.appspot.com",
  messagingSenderId: "542011425086",
  appId: "1:542011425086:web:e4bcd6dc2376ef167cec6f",
  measurementId: "G-RXEY1T8PB5",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    // <View style={styles.container}>
    <GamesNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
