import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Victory Path</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text>Login or Register</Text>
      </TouchableOpacity>
      <Link></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flex: 1,
    color: '#FFF',
    fontSize: 40,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // flex: 1,
    color: '#FFF',
    backgroundColor: "grey",
    fontSize: 20,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'grey',
  }
});
