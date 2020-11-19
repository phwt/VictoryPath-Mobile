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

export default function Tutorial(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("GameScreen");
        }}
      >
        <Image style={styles.exitbt} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <Text style={styles.settext}>
        <Text style={styles.text1}>How to </Text>
        <Text style={styles.text2}>Play</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  exitbt: {
    width: 25,
    height: 25,
    marginLeft: "10%",
    marginTop: "10%",
    marginRight: "90%",
    transform: [{ rotate: "180deg" }],
  },
  settext: {
    marginTop: "5%",
  },
  text1: {
    marginTop: "30%",
    fontSize: 40,
    color: "#ffce08",
  },
  text2: {
    marginTop: "30%",
    fontSize: 40,
    color: "white",
  },
});
