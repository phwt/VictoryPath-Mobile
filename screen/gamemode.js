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

export default function GameMode(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("GameScreen");
        }}
      >
        <Image style={styles.exitbt} source={require("../assets/arrow.png")} />
      </TouchableOpacity>

      <Text style={styles.header}>Victory Path</Text>
      <Image style={styles.image} source={require("../assets/boomboom.gif")} />

      {/* ปุ่มเซ็ตที่1 แถวบน */}
      <View style={styles.setbt1}>
        <TouchableOpacity
          style={styles.easybt}
          onPress={() => {
            props.navigation.navigate("EasyScreen");
          }}
        >
          <Text style={styles.text}> Easy </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.normalbt}
          onPress={() => {
            props.navigation.navigate("NormalScreen");
          }}
        >
          <Text style={styles.text}>Normal</Text>
        </TouchableOpacity>
      </View>

      {/* ปุ่มเซ็ตที่2 แถวล่าง */}
      <View style={styles.setbt2}>
        <TouchableOpacity
          style={styles.hardbt}
          onPress={() => {
            props.navigation.navigate("HardScreen");
          }}
        >
          <Text style={styles.text}>Hard</Text>
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
    // justifyContent: "center",
  },
  exitbt: {
    width: 25,
    height: 25,
    marginLeft: "10%",
    marginTop: "10%",
    marginRight: "90%",
    transform: [{ rotate: "180deg" }],
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
    position: "absolute",
    bottom: "16%",
  },
  setbt2: {
    flexDirection: "row",
    position: "absolute",
    bottom: "8%",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "50%",
    // margin: 40,
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
    marginTop: "1%",
    color: "#f5f17f",
    fontSize: 50,
    paddingBottom: 20,
    alignItems: "flex-start",
  },
});
