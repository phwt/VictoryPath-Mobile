import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export default function Scoreboard() {
  return (
    <View style={styles.container}>
      <Text>
        <Text>Score </Text>
        <Text>Board</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignSelf: "stretch",
  },
  button: {
    color: "#FFF",
    backgroundColor: "grey",
    fontSize: 20,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "grey",
  },
  header: {
    color: "#FFF",
    fontSize: 30,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 40,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f8f8f8",
  },
});
