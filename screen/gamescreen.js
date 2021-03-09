import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
// import { Audio } from "expo-av";
// import email from "./login";
// import firebase from "firebase";

const Game = (props) => {
  // const bgSound = new Audio.Sound();
  // bgSound.loadAsync(require("../assets/sound/bgmusic.mp3"));

  // function playSound() {
  //   console.log("play");
  //   bgSound.playAsync();
  // }
  // playSound();

  return (
    <View style={styles.container}>
      <View style={styles.setpositionapge}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Image
          style={styles.gif}
          source={{
            uri:
              "https://video-public.canva.com/VADn8UbzNr4/videos/8b30290d4b.gif",
          }}
        />
        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("GameModeScreen");
          }}
        >
          <Text style={styles.tutorial}> Play </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("TutorialScreen");
          }}
        >
          <Text style={styles.tutorial}> Tutorial </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("ScoreBoardScreen");
          }}
        >
          <Text style={styles.tutorial}> Score Board </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.setpositionbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.text}>Login |</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  tutorial: {
    fontSize: 18,
    // top: "10%",
  },
  logo: {
    marginTop: "10%",
    height: "10%",
    width: 300,
    marginBottom: "10%",
  },
  setpositionbutton: {
    flexDirection: "row",
    position: "absolute",
    bottom: "10%",
  },
  setpositionapge: {
    alignItems: "center",
    justifyContent: "center",
  },
  ttpbt: {
    backgroundColor: "#cccccc",
    top: "15%",
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#cccccc",
    marginBottom: 10,
  },
  gif: {
    margin: "10%",
    width: 170,
    transform: [{ rotate: "45deg" }],
    height: 170,
  },
  text: {
    color: "#122eff",
    fontSize: 18,
  },
  button: {
    top: "20%",
    margin: 3,
  },
});

export default Game;
