import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import firebase from "firebase";
import Modal from "react-native-modal";
import LoginForm from "./loginform";
// import { Root, Popup } from "popup-ui";
// import Toast from "./Toast";

// import auth from "@react-native-firebase/auth";

const checkLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login Success!");
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email or Password was wrong!");
        alert("Email or Password was wrong!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        alert("That email address is invalid!");
      }
      console.error(error);
    });
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
      <Button style={styles.button} title="Login" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.loginbt}>
          <Text style={{ fontSize: 30, color: "red" }}>Welcome!</Text>
          <Text>{email}</Text>
          <Button style={styles.button} title="Got it" onPress={toggleModal} />
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => checkLogin(email, password)}
        title="Login"
      ></TouchableOpacity>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignSelf: "stretch",
  },
  loginbt: {
    flex: 1,
    backgroundColor: "white",
    marginTop: "40%",
    marginBottom: "40%",
    marginLeft: "20%",
    marginRight: "20%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
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
