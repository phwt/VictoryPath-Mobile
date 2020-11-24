import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


console.log("----------------------------------------------");
// เก็บค่าสี
var colors = ["#F90A03", "#0323F9", "#1AF903", "#E6FC00", "#EE00FC", "#7B06B1"];
var randColor = colors[Math.floor(Math.random() * colors.length)];


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


export default function Easy(props) {
  var rows = [];
  var nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  var ranNum = nums[Math.floor(Math.random() * nums.length)];
//   console.log(ranNum);

  // var ranNum = nums[0][Math.floor(Math.random() * nums.length)];
  // var answer = 1;
  var keepAnswer = [];
    function randomPostion(){
        for(let p = nums.length -1 ; p >= 0 ; p--){
            let keep =  nums[p][Math.floor(Math.random() * nums.length)]; 
            // เก็บคำตอบไว้ใน array สำหรับนำมาเช็ค
            keepAnswer.push(keep);
            console.log("random position is " + keep);
            
            }
        
        console.log("correct answer is " + keepAnswer);
    }

    randomPostion();
    // log คำตอบ
    console.log(keepAnswer);

// เก็บคำตอบที่เราคลิ๊ก เพื่อเอาไว้นำมาเช็คกับคำตอบที่ถูกต้อง
  var yourAns = [];
  var yourScore = 0;
  console.log("Now your score is: " + yourScore)
  function buttonPress(num) {
    console.log("you click on " + num);
    yourAns.push(num);
    
    if(yourAns.length % nums.length == 0){
        console.log("OK, "+yourAns.length);
        console.log("your answer is "+ yourAns)
        if(arraysEqual(yourAns, keepAnswer)){
            console.log("you correct");
            yourScore++;
            console.log("***** Now your score is: " +'"'+ yourScore + '"'+ " ******")
            keepAnswer = [];
            yourAns = [];
            randomPostion();
            
        }
        else{
            console.log("You are Failed");
            alert("You are Failed! Your Score is: " + yourScore);
            yourScore = 0;
            keepAnswer = [];
            yourAns = [];
            
        }
    }
  }

  function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}


  for (let i = 0; i < 4; i++) {
    var row = [];
    for (let j = 0; j < 4; j++) {
      row.push(
        <TouchableOpacity
            // key={nums[i][j]}
            // style={randomCol(randColor)}
            // onPress={() => buttonPress(nums[i][j])} // เอาไว้เก็บค่าว่ากดปุ่มไหน
            style={styles.grid}
            onPress={() => buttonPress(nums[i][j])}
        >
        <Text style={{color:"black", fontSize:40}}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push(<View style={styles.gridlayout}>{row}</View>);
  }

    
    console.log("please answer the correct position")
    

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
    backgroundColor: "#F8F9F9",
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
