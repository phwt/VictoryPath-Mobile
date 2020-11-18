import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Login from "./login";
import Register from "./register";
import ScoreScreen from "./scoreboard";
// import { Spring } from "react-spring/renderprops";

const Game = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.setpositionapge}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Image
          style={styles.image}
          source={{
            uri:
              "https://video-public.canva.com/VADn8UbzNr4/videos/8b30290d4b.gif",
          }}
        />
        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("GameModeScreen");
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/playbutton.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ttpbt}>
          <Text style={styles.tutorail}> Tutorial </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ttpbt}
          onPress={() => {
            props.navigation.navigate("ScoreBoardScreen");
          }}
        >
          <Text style={styles.tutorail}> Score Board </Text>
        </TouchableOpacity>
        {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            
          )} */}
        {/* </Spring> */}
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
  },
  tutorail: {
    fontSize: 18,
  },
  logo: {
    marginTop: "20%",
    height: "10%",
    width: 300,
    marginBottom: 70,
    marginTop: 90,
  },
  txt: {
    color: "red",
    fontSize: 50,
  },
  setpositionbutton: {
    flexDirection: "row",
  },
  setpositionapge: {
    alignItems: "center",
  },
  ttpbt: {
    backgroundColor: "#cccccc",
    top: "7%",
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#cccccc",
    marginBottom: 10,
  },
  ttptxt: {
    fontSize: 20,
    color: "grey",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
    width: 170,
    transform: [{ rotate: "45deg" }],
    height: 170,
  },
  text: {
    color: "#122eff",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    top: "20%",
    margin: 3,
  },
});

export default Game;
