import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Login from './login';
import Register from './register';

const Game = (props) => {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/victorypath.jpg")}/>
          <Text style={styles.text}>tap to play</Text>
          <TouchableOpacity style={styles.button} onPress={
              () => {props.navigation.navigate('LoginScreen');}
          }>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={
              () => {props.navigation.navigate('RegisterScreen');}
          }>
            <Text>Register</Text>
          </TouchableOpacity>
          {/* props.navagation.navigate('LoginScreen') */}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#888',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#FFF',
    backgroundColor: "grey",
    fontSize: 20,
    top: '25%',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'grey',
  }
});

export default Game;