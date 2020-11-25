import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Picker,
} from "react-native";
import firebase from "firebase";

export default function Scoreboard(hello) {
  const [scores, setScores] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const showscore = async () => {
    console.log(selectedValue);
    setScores([]);
    const score = await firebase
      .firestore()
      .collection("score")
      // .where("email", "==", user)
      .where("mode", "==", selectedValue)
      .get();

    const old = [];

    score.forEach((props) => {
      console.log(props.data());

      old.push(props.data());

      // setScores((o) => {
      //   return [...o, props.data()];
      // });
    });

    old.sort((a, b) => b.point - a.point);

    setScores(old);
  };
  useEffect(() => {
    showscore();
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          hello.navigation.navigate("GameScreen");
        }}
      >
        <Image style={styles.exitbt} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <View style={styles.setposition}>
        <Text style={styles.settext}>
          <Text style={styles.text1}>Score </Text>
          <Text style={styles.text2}>Board</Text>
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 50,
            width: 200,
            color: "white",
            marginLeft: "20%",
          }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Selected Mode" value="All" />
          <Picker.Item label="Easy Mode" value="easy" />
          <Picker.Item label="Normal Mode" value="normal" />
          <Picker.Item label="Hard Mode" value="hard" />
        </Picker>
        {/* <View style={styles.setbox}>
          {scores.map((props) => {
            return (
              <Text style={styles.scoretext} key={props.name}>
                <Text>{props.name}</Text>
                <Text>{props.point}</Text>
              </Text>
            );
          })}
        </View> */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text
            style={{
              color: "white",
              marginRight: "30%",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Name
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Score
          </Text>
        </View>
        {scores.map((data) => {
          return (
            <View style={styles.containerData}>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: 1,
                  width: "50%",
                  backgroundColor: "white",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <Text style={styles.scoretext}>{data.email}</Text>
              </View>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: 1,
                  width: "50%",
                  color: "black",
                  alignItems: "flex-end",
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Text style={styles.scoretext}>{data.point}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  containerData: {
    flexDirection: "row",
  },
  setposition: {
    alignItems: "center",
    // margin: 10,
  },
  setbox: {
    margin: 10,
  },
  exitbt: {
    width: 25,
    height: 25,
    marginLeft: "10%",
    marginTop: "10%",
    marginRight: "90%",
    transform: [{ rotate: "180deg" }],
  },
  scoretext: {
    textAlign: "auto",
    color: "red",
    margin: 10,
    justifyContent: "space-around",
  },
  settext: {
    marginTop: "2%",
  },
  text1: {
    marginTop: "30%",
    fontSize: 40,
    color: "#ffce08",
  },
  text2: {
    marginTop: "30%",
    fontSize: 40,
    color: "white",
  },
});

//  if (data.email == user){" "}
// {
//     if (data.mode == selectedValue) {
//   return (
//     <View style={styles.containerData}>
//       <View
//         style={{
//           borderColor: "grey",
//           borderWidth: 1,
//           width: "50%",
//           backgroundColor: "white",
//           alignItems: "center",
//           color: "black",
//         }}
//       >
//         <Text style={styles.scoretext}>{data.email}</Text>
//       </View>
//       <View
//         style={{
//           borderColor: "grey",
//           borderWidth: 1,
//           width: "50%",
//           color: "black",
//           alignItems: "flex-end",
//           backgroundColor: "white",
//           alignItems: "center",
//         }}
//       >
//         <Text style={styles.scoretext}>{data.point}</Text>
//       </View>
//     </View>
// );
//   }
//   }
// if (selectedValue == "easy") {
//   return (
//     <View style={styles.containerData}>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           width: "30%",
//           borderRadius: 10,
//           backgroundColor: "white",
//           alignItems: "center",
//           justifyContent: "center",
//           marginRight: "5%",
//           marginLeft: "10%",
//           color: "black",
//           // fontWeight: "bold",
//         }}
//       >
//         <Text style={styles.gametext}>{data.email}</Text>
//       </View>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           borderRadius: 10,
//           width: "30%",
//           backgroundColor: "white",
//           alignItems: "center",
//           marginRight: "10%",
//           marginLeft: "5%",
//           color: "black",
//         }}
//       >
//         <Text style={styles.scoretext}>{data.point}</Text>
//       </View>
//     </View>
//   );
// }
// if (selectedValue == "normal") {
//   return (
//     <View style={styles.containerData}>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           width: "30%",
//           borderRadius: 10,
//           backgroundColor: "white",
//           alignItems: "center",
//           justifyContent: "center",
//           marginRight: "5%",
//           marginLeft: "10%",
//           color: "black",
//           // fontWeight: "bold",
//         }}
//       >
//         <Text style={styles.gametext}>{data.email}</Text>
//       </View>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           borderRadius: 10,
//           width: "30%",
//           backgroundColor: "white",
//           alignItems: "center",
//           marginRight: "10%",
//           marginLeft: "5%",
//           color: "black",
//         }}
//       >
//         <Text style={styles.scoretext}>{data.point}</Text>
//       </View>
//     </View>
//   );
// }
// if (selectedValue == "hard") {
//   return (
//     <View style={styles.containerData}>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           width: "30%",
//           borderRadius: 10,
//           backgroundColor: "white",
//           alignItems: "center",
//           justifyContent: "center",
//           marginRight: "5%",
//           marginLeft: "10%",
//           color: "black",
//           // fontWeight: "bold",
//         }}
//       >
//         <Text style={styles.gametext}>{data.email}</Text>
//       </View>
//       <View
//         style={{
//           borderColor: "white ",
//           borderWidth: 1,
//           borderRadius: 10,
//           width: "30%",
//           backgroundColor: "white",
//           alignItems: "center",
//           marginRight: "10%",
//           marginLeft: "5%",
//           color: "black",
//         }}
//       >
//         <Text style={styles.scoretext}>{data.point}</Text>
//       </View>
//     </View>
//   );
// }
