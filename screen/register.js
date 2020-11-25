import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import firebase from "firebase";

const signUp = (email, password, props) => {
  console.log(props);
  console.log(email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert(
        "sign in success",
        "User account created & signed in!",
        [
          {
            text: "OK",
            onPress: () => props.navigation.navigate("GameScreen"),
          },
        ],
        { cancelable: false }
      );
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    });
};

export default function Register(props) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register / สมัครสมาชิก</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => setEmail(value)}
        placeholder="Your name [ Your ID ]"
      ></TextInput>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => setPassword(value)}
        placeholder="Your password"
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={() => signUp(email, password, props)}
      >
        <Text style={{ color: "white" }}>Sign up</Text>
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
    backgroundColor: "#0080ff",
    fontSize: 30,
    marginBottom: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 10,
    // borderWidth: 5,
    // borderColor: "#0059ff",
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
