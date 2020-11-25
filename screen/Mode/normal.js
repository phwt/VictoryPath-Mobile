import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import * as firebase from "firebase";

export default function Normal(props) {
  const [gameplay, setGamePlay] = useState(false);
  const [score, setScore] = useState(0);
  const [ansList, setAnsList] = useState([]);
  const [click, setClick] = useState(0);
  const [path1, setPath1] = useState("#f73232");
  const [path2, setPath2] = useState("#f73232");
  const [path3, setPath3] = useState("#f73232");
  const [path4, setPath4] = useState("#f73232");
  const [path5, setPath5] = useState("#f73232");

  //Customize Button
  const PathButton = ({ bgcolor, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: "0.5%",
        width: 65,
        height: 65,
        backgroundColor: bgcolor,
        borderRadius: 30,
      }}
    />
  );
  const WrongButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.grid} />
  );

  var timedisplay = 500; //เวลาที่จะแสดงสีค้างไว้
  var size = 5; //ไซส์ของตาราง

  var rows = [];
  var buttonValue = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  //เช็คคำตอบ
  function addToAnswer(number) {
    if (path1 == "#7F8080") {
      //เช็คว่าตัวสุดท้ายยังไม่ถูกกด
      if (number == ansList[click]) {
        //เช็คว่าตอบถูก
        setClick(click + 1);
        switch (
          click + 1 //แสดงสีปุ่มที่กด
        ) {
          case 5:
            setPath1("#f73232");
            break;
          case 4:
            setPath2("#f73232");
            break;
          case 3:
            setPath3("#f73232");
            break;
          case 2:
            setPath4("#f73232");
            break;
          case 1:
            setPath5("#f73232");
            break;
          default:
            break;
        }
        console.log(number + " Nice bro!!!");
        if (click + 1 == size) {
          //ตอบถูกครบรับไปเลย 1 คะแนน
          setScore(score + 1);
          setClick(0);
          console.log(gameplay);
          setGamePlay(false);
          console.log("endgame:" + gameplay);
          ansList.splice(0, size);
          console.log("result at end: " + ansList);
          rows.splice(0, size);
        }
      } else {
        //กดผิด = แพ้
        console.log("Defeat!!!");
        console.log(score);
        console.log(firebase.auth().currentUser.email);
        firebase.firestore().collection("score").add({
          email: firebase.auth().currentUser.email,
          mode: "normal",
          point: score,
        });
        Alert.alert(
          "Defeat!",
          "Your score is " + score,
          [
            {
              text: "OK",
              onPress: () => props.navigation.navigate("GameModeScreen"),
            },
          ],
          { cancelable: false }
        );
      }
    }
  }

  function createGrid() {
    // สุ่มเลขเพื่อทำทาง
    if (gameplay == false) {
      var temp = 100;
      for (let i = 0, j = size - 1; i < size; i++, j--) {
        if (temp != 100) {
          var combo = Math.floor(Math.random() * 5);
          if (combo === 0 && temp != 0) var pos = temp - 1;
          else if (combo === 1 && temp != 0) var pos = temp - 1;
          else if (combo === 2) var pos = temp;
          else if (combo === 3 && temp != size - 1) var pos = temp + 1;
          else if (combo === 4 && temp != size - 1) var pos = temp + 1;
        } else pos = Math.floor(Math.random() * size);
        temp = pos;
        ansList.push(buttonValue[j][pos]);
      }
      console.log("gameplay:" + gameplay);
      console.log("result: " + ansList);
      setGamePlay(true);

      //สร้าง Grid
    }
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        if (ansList.includes(buttonValue[i][j])) {
          switch (i) {
            case 0:
              row.push(
                <PathButton
                  bgcolor={path1}
                  onPress={() => addToAnswer(buttonValue[i][j])}
                />
              );
              break;
            case 1:
              row.push(
                <PathButton
                  bgcolor={path2}
                  onPress={() => addToAnswer(buttonValue[i][j])}
                />
              );
              break;
            case 2:
              row.push(
                <PathButton
                  bgcolor={path3}
                  onPress={() => addToAnswer(buttonValue[i][j])}
                />
              );
              break;
            case 3:
              row.push(
                <PathButton
                  bgcolor={path4}
                  onPress={() => addToAnswer(buttonValue[i][j])}
                />
              );
              break;
            case 4:
              row.push(
                <PathButton
                  bgcolor={path5}
                  onPress={() => addToAnswer(buttonValue[i][j])}
                />
              );
              break;
            default:
              break;
          }
        } else {
          row.push(
            <WrongButton onPress={() => addToAnswer(buttonValue[i][j])} />
          );
        }
      }
      rows.push(<View style={styles.gridlayout}>{row}</View>);
    }
  }

  // เปลี่ยนสีกลับเป็นสีเทา
  useEffect(() => {
    const toggle = setTimeout(function () {
      if (path1 == "#f73232" && path3 == "#f73232" && path5 == "#f73232") {
        console.log("Set to Gray");
        setPath1("#7F8080");
        setPath2("#7F8080");
        setPath3("#7F8080");
        setPath4("#7F8080");
        setPath5("#7F8080");
      }
    }, timedisplay);
  });

  createGrid();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Normal Mode</Text>
      <Text style={styles.header}>Score: {score}</Text>
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
    width: 65,
    height: 65,
    backgroundColor: "#7F8080",
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
