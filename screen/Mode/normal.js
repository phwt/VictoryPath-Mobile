import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function Normal(props) {
    const [activeColor, setActiveColor] = useState("#40FFFF");
    const [disableColor, setDisableColor] = useState("#7F8080");
    const [showPath, setShowPath] = useState(true);

    //Customize Button
    const PathButton = ({onPress, backgroundColor }) => (<TouchableOpacity onPress={onPress} style={{margin: "0.5%",
    width: 65,
    height: 65,
    backgroundColor: activeColor,
    borderRadius: 30}}/>);
    const WrongButton = ({onPress}) => (<TouchableOpacity onPress={onPress} style={styles.grid}/>);

    var answer = []; //คำตอบของผู้เล่น
    var timedis = 3000; //เวลาที่จะแสดงสีค้างไว้
    var timerandom = 500; //เวลาในการแสดงสีแต่ละช่อง #ยิ่งน้อยยิ่งเร็ว
    var size = 5; //ไซส์ของตาราง
    var score = 0;

    function addToAnswer(number){
        answer.push(number);
    }

    var rows = [];
    var buttonValue = [[1,2,3,4,5],
                        [6,7,8,9,10],
                        [11,12,13,14,15],
                        [16,17,18,19,20],
                        [21,22,23,24,25]];

    var result = [];
    var temp = 100;
    // setTimeout(function() {
        for (let i = 0, j = size - 1; i < size; i++, j--) {
            if (temp != 100) {
                var combo = Math.floor(Math.random() * 5);
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
            // timeOut(j, pos, i);
            // console.log(j + '' + pos);
            result.push(buttonValue[j][pos]);
        }
        console.log("result: "+result);
    // }, 100);


    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
            if(result.includes(buttonValue[i][j])){
                row.push(<PathButton onPress={()=>addToAnswer(buttonValue[i][j])}/>);
            }else{
                row.push(<WrongButton onPress={()=>addToAnswer(buttonValue[i][j])}/>);
            } 
        }
        rows.push(<View style={styles.gridlayout}>{row}</View>);
    }

    setTimeout(function(){
        setActiveColor("#7F8080");
    }, 3000);
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Normal Mode</Text>
            <View style={styles.frame}>
                {rows}
            </View>
            <View style={styles.btnrow}>
                <TouchableOpacity style={styles.btngreen} onPress={() => {props.navigation.navigate("GameModeScreen");}}>
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
        width: 65,
        height: 65,
        backgroundColor: '#7F8080',
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
    }

});
