import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Hard() {
    return (

      <View style={styles.container}>
          <text>This page is so hard</text>
      </View>
    );
  }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
 
});