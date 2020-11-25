import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text , Alert} from "react-native";


export default function Easy(props) {
    const [activeColor, setActiveColor] = useState("#0070ff");
    const [gameplay, setGamePlay] = useState(false);
    const [score, setScore] = useState(0);
    const [pathList, setPathList] = useState([])

    //Customize Button
    const PathButton = ({onPress}) => (<TouchableOpacity onPress={onPress} style={{margin: "0.5%",
    width: 75,
    height: 75,
    backgroundColor: activeColor,
    borderRadius: 35}}/>);
    const WrongButton = ({onPress}) => (<TouchableOpacity onPress={onPress} style={styles.grid}/>);
    if (gameplay)
    var timedisplay = 1000; //เวลาที่จะแสดงสีค้างไว้
    var size = 4; //ไซส์ของตาราง
    // var score = 0; //คะแนน
    var click = 0; //กดไปกี่ครั้ง
    var rows = [];
    var buttonValue = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    //เช็คคำตอบ
    function addToAnswer(number){
        if (activeColor == "#7F8080"){
            if (number == pathList[click]){
                click += 1;
                console.log(number+" Nice bro!!!");
                if (click == size){
                    setScore(score+1);
                    click = 0;
                    console.log(gameplay);
                    setGamePlay(false);
                    console.log("endgame:"+gameplay);
                    pathList.splice(0, size);
                    console.log("result at end: "+pathList);
                    rows.splice(0, size);
                    setActiveColor("#0070ff");
                }
            }else{
                console.log("Defeat!!!");
                Alert.alert(
                    "Defeat!",
                    "Your score is "+ score,
                    [
                      { text: "OK", onPress: () => props.navigation.navigate("GameModeScreen")}
                    ],
                    { cancelable: false }
                  );
                // Alert.alert("Defeat! your score is " + score);
                
            }
        }
    }

    function createGrid(){
        if (gameplay==false){
        var temp = 100;
            for (let i = 0, j = size - 1; i < size; i++, j--) {
                if (temp != 100) {
                    var combo = Math.floor(Math.random() * 4);
                    if (combo === 0 && temp != 0)
                        var pos = temp - 1;
                    else if (combo === 1 && temp != 0)
                        var pos = temp - 1;
                    else if (combo === 2)
                        var pos = temp;
                    else if (combo === 3 && temp != (size - 1))
                        var pos = temp + 1;
                    else if (combo === 4 && temp != (size - 1))
                        var pos = temp + 1;
                } else
                    pos = Math.floor(Math.random() * size);
                temp = pos;
                pathList.push(buttonValue[j][pos]);
            }
            console.log("gameplay:"+gameplay);
            console.log("result: "+pathList);
            setGamePlay(true);
            // setPathList([]);
            // setGamePlay(false);
            // console.log("result: "+pathList);
        //สร้าง Grid            
        }
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                if(pathList.includes(buttonValue[i][j])){
                    row.push(<PathButton onPress={()=>addToAnswer(buttonValue[i][j])}/>);
                }else{
                    row.push(<WrongButton onPress={()=>addToAnswer(buttonValue[i][j])}/>);
                  } 
            }
            rows.push(<View style={styles.gridlayout}>{row}</View>);
        }}

        useEffect(() => {
            const toggle = setTimeout(function(){
                setActiveColor("#7F8080");//เปลี่ยน Path กลับเป็นสีเทา
            }, timedisplay);
        })

        createGrid();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Easy Mode</Text>
            <Text style={styles.header}>Score: {score}</Text>
            <View style={styles.frame}>
                {rows}
            </View>
            <View style={styles.btnrow}>
                <TouchableOpacity style={styles.btngreen} onPress={() => {props.navigation.navigate("GameModeScreen");}}>
                    <Text style={styles.text}>select mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnred} onPress={() => {
                  
            props.navigation.navigate("GameScreen");
          }}>
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
    frame: {

    },
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
        backgroundColor: '#7F8080',
        borderRadius: 35,
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
    }

});
