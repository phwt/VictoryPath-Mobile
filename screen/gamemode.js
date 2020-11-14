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
import { RotationGestureHandler } from "react-native-gesture-handler";

export default function GameMode() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>VictoryPath</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://video-public.canva.com/VADn8UbzNr4/videos/8b30290d4b.gif",
        }}
      />

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
    width: 150,
    height: 150,
    transform: [{ rotate: "45deg" }],
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
