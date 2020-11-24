import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Normal(props) {
  const AppButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6,
        },
        backgroundColor && { backgroundColor },
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  var colors = ["#F90A03", "#0323F9", "#1AF903", "#E6FC00"];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randColor);

  let rows = [];
  let nums = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  var answer = [];

  function addToAnswer(num) {
    answer.push(num);
    console.log("Already Push to Answer");
    console.log(answer);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Normal Mode</Text>
      <View style={styles.frame}>
        <View style={styles.gridlayout}>
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(1)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(2)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(3)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(4)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(5)}
          />
        </View>

        <View style={styles.gridlayout}>
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(6)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(7)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(8)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(9)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(10)}
          />
        </View>

        <View style={styles.gridlayout}>
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(11)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(12)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(13)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(14)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(15)}
          />
        </View>

        <View style={styles.gridlayout}>
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(16)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(17)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(18)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(19)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(20)}
          />
        </View>

        <View style={styles.gridlayout}>
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(21)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(22)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(23)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(24)}
          />
          <TouchableOpacity
            style={styles.grid}
            onPress={() => addToAnswer(25)}
          />
        </View>
      </View>
      <View style={styles.btnrow}>
        <TouchableOpacity
          style={styles.btngreen}
          onPress={() => {
            props.navigation.navigate("GameModeScreen");
          }}
        >
          <Text style={styles.text}>select mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnred}>
          <Text style={styles.text}>End game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {},
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },
  gridlayout: {
    flexDirection: "row",
  },
  grid: {
    margin: "0.5%",
    width: 65,
    height: 65,
    backgroundColor: "red",
    borderRadius: 30,
    // '#F8F9F9'
  },

  btngreen: {
    margin: 25,
    borderRadius: 15,
    backgroundColor: "green",
    alignItems: "center",
    height: 50,
    width: 120,
  },
  btnred: {
    margin: 25,
    borderRadius: 15,

    backgroundColor: "red",
    alignItems: "center",
    height: 50,
    width: 120,
  },

  text: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic",
    marginTop: 10,
  },
  btnrow: {
    flexDirection: "row",
    marginTop: 40,
  },
});
