import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import firebase from "firebase";

import auth from "@react-native-firebase/auth";

const checkLogin = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
  console.log("success");
};

export default function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login / ลงทะเบียน</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Your name [ Your ID ]"
        onChangeText={(getEmail) => setEmail(getEmail)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Your password"
        onChangeText={(getPassword) => setPassword(getPassword)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => checkLogin(email, password)}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignSelf: "stretch",
  },
  button: {
    // color: '#FFF',
    backgroundColor: "#0059ff",
    fontSize: 20,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#0059ff",
  },
  header: {
    color: "#0059ff",
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
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#f8f8f8",
  },
});
