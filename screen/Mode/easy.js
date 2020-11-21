import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function Easy() {
    return (

      <View style={styles.container}>
          <text>This page is EZPZ lemon squeezy</text>
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