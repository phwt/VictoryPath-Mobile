import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImagePropTypes } from 'react-native';

import GamesNavigator from './navigation/navigator';
import Game from './screen/game';

export default function App() {
  return (
    // <View style={styles.container}>
      <GamesNavigator />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
