import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Login from "./login";
import Register from "./register";

const GameScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.setpositionapge}>
        <Image
          style={styles.image}
          source={require("../assets/victorypath.jpg")}
        />

        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("GameModeScreen");
          }}
        >
          <Text style={styles.ttptxt}>Tap to play</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.setpositionbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.text}>Login /</Text>
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
    justifyContent: "center",
  },
  setpositionbutton: {
    flexDirection: "row",
  },
  setpositionapge: {
    alignItems: "center",
  },
  ttpbt: {
    backgroundColor: "black",
    top: "25%",
  },
  ttptxt: {
    fontSize: 20,
    color: "grey",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#122eff",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    top: "50%",
    margin: 3,
    // borderRadius: 10,
    // borderWidth: 5,
    // borderColor: "grey",
  },
});

export default Game;
