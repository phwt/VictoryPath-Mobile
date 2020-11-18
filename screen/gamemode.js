import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import GameScreen from "./gamescreen";

export default function GameMode() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.removelogo}
          source={require("../assets/remove.png")}
        />
      </TouchableOpacity>
      <Text style={styles.header}>VictoryPath</Text>
      <Image style={styles.image} source={require("../assets/boomboom.gif")} />
      <View style={styles.setbt1}>
        <TouchableOpacity style={styles.easybt}>
          <Text style={styles.text}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.normalbt}>
          <Text style={styles.text}>Normal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.setbt2}>
        <TouchableOpacity style={styles.hardbt}>
          <Text style={styles.text}>Hard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.extremebt}>
          <Text style={styles.text}>Extreme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  removelogo: {
    marginRight: "85%",
    width: "15%",
    height: "4%",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
  },
  setbt1: {
    flexDirection: "row",
  },
  setbt2: {
    flexDirection: "row",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "40%",
    margin: 40,
  },
  easybt: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#0059ff",
    backgroundColor: "#0059ff",
    alignItems: "center",
    height: 40,
    width: 100,
  },
  normalbt: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#f01a1e",
    backgroundColor: "#f01a1e",
    alignItems: "center",
    height: 40,
    width: 100,
  },
  hardbt: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#1af03e",
    backgroundColor: "#1af03e",
    alignItems: "center",
    height: 40,
    width: 100,
  },
  extremebt: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#fff70d",
    backgroundColor: "#fff70d",
    alignItems: "center",
    height: 40,
    width: 100,
  },
  header: {
    color: "#f5f17f",
    fontSize: 50,
    paddingBottom: 20,
    alignItems: "flex-start",
  },
});
