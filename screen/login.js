import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  MyText,
} from "react-native";
import firebase from "firebase";
import Modal from "react-native-modal";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const checkLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // alert("Login Success!");
        props.navigation.navigate("GameScreen");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          // console.log("Email or Password was wrong!");
          alert("Email or Password was wrong!");
          props.navigation.replace("LoginScreen");
        }

        if (error.code === "auth/invalid-email") {
          // console.log("That email address is invalid!");
          alert("That email address is invalid!");
          props.navigation.replace("LoginScreen");
        }
        console.error(error);
      });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const switchToSignUp = () => {
    props.navigation.replace("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login / ลงทะเบียน</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Your email   [ ex.123@gmail.com ]"
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
          <Text style={{ fontSize: 30, color: "red" }}>Confirm Login!</Text>
          <Text>{email}</Text>
          <View style={styles.buttonInModal}>
            {/* <TouchableOpacity onPress={() => checkLogin(email, password)}>
              <Text>Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text> Cancel</Text>
            </TouchableOpacity> */}
            <Button
              title="Confirm"
              onPress={() => checkLogin(email, password)}
            />
            <Button
              style={styles.button2}
              onPress={toggleModal}
              title="cancel"
            />
          </View>
          {/* <Button
            style={styles.button2}
            title="Let go"
            onPress={() => checkLogin(email, password)}
          />
          <Button style={styles.button2} onPress={toggleModal} title="cancel" /> */}
        </View>
      </Modal>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => checkLogin(email, password)}
        title="Login"
      ></TouchableOpacity> */}

      <TouchableOpacity onPress={switchToSignUp} style={styles.gotoregist}>
        <Text style={styles.gotoregist}>Doesn't have any account ? </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignSelf: "stretch",
  },
  gotoregist: {
    left: "23%",
    top: "3%",
    color: "blue",
  },
  button2: {
    backgroundColor: "#e8e8e8",
  },
  loginbt: {
    flex: 2,
    backgroundColor: "white",
    marginTop: "40%",
    marginBottom: "40%",
    marginLeft: "20%",
    marginRight: "20%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonInModal: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    backgroundColor: "#0059ff",
    fontSize: 20,
    marginBottom: 100,
    // alignItems: "center",
    // justifyContent: "center",
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
