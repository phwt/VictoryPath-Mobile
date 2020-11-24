import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// เก็บค่าสี
var colors = ["#F90A03", "#0323F9", "#1AF903", "#E6FC00", "#EE00FC", "#7B06B1"];
var randColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randColor);

// สไตล์สุ่มสี
function randomCol(randColor) {
  return {
    margin: "0.5%",
    width: 75,
    height: 75,
    backgroundColor: randColor,
    borderRadius: 30,
  };
}

function showTime(pos, pos2, t) {
  setShowtime(function () {
    allcolor = [
      "#F90A03",
      "#0323F9",
      "#1AF903",
      "#E6FC00",
      "#EE00FC",
      "#7B06B1",
    ];
    randomcolor = allcolor[Math.floor(Math.random() * allcolor.length)];
    $("#box" + pos + pos2).css("background-color", randomcolor);
  }, timerandom * t);
}

export default function Easy(props) {
  var rows = [];
  var nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  var ranNum = nums[Math.floor(Math.random() * nums.length)];
  console.log(ranNum);

  // var ranNum = nums[0][Math.floor(Math.random() * nums.length)];
  var answer = 1;

  function buttonPress(num) {
    console.log(num);
  }
  for (let i = 0; i < 4; i++) {
    var row = [];
    for (let j = 0; j < 4; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          style={randomCol(randColor)}
          onPress={() => buttonPress(nums[i][j])} // เอาไว้เก็บค่าว่ากดปุ่มไหน
        ></TouchableOpacity>
      );
    }
    rows.push(<View style={styles.gridlayout}>{row}</View>);
  }
  // เช็ค ตำแหน่ง array
  console.log(nums[0][1]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Easy Mode</Text>
      <View style={styles.frame}>{rows}</View>
      <View style={styles.btnrow}>
        <TouchableOpacity
          style={styles.btngreen}
          onPress={() => {
            props.navigation.navigate("GameModeScreen");
          }}
        >
          <Text style={styles.text}>select mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnred}
          onPress={() => {
            props.navigation.navigate("GameScreen");
          }}
        >
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
    width: 75,
    height: 75,
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
