import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function Normal(props) {
    const [activeColor, setActiveColor] = useState("#40FFFF");

    //Customize Button
    const PathButton = ({onPress}) => (<TouchableOpacity onPress={onPress} style={{margin: "0.5%",
    width: 65,
    height: 65,
    backgroundColor: activeColor,
    borderRadius: 30}}/>);
    const WrongButton = ({onPress}) => (<TouchableOpacity onPress={onPress} style={styles.grid}/>);

    var timedisplay = 3000; //เวลาที่จะแสดงสีค้างไว้
    var size = 5; //ไซส์ของตาราง
    var score = 0; //คะแนน
    var click = 0; //กดไปกี่ครั้ง
    var rows = [];
    var result = [];
    var buttonValue = [[1,2,3,4,5],
                        [6,7,8,9,10],
                        [11,12,13,14,15],
                        [16,17,18,19,20],
                        [21,22,23,24,25]];

    //เช็คคำตอบ
    function addToAnswer(number){
        console.log(number);
        if (number == result[click]){
            click += 1;
            console.log(number+" Nice bro!!!");
            if (click == size){
                score += 1;
                console.log("***** Now your score is: " +'"'+ yourScore + '"'+ " ******");
                click = 0;
                createGrid();
            }
        }else{
            console.log("Defeat!!!");
            props.navigation.navigate("GameModeScreen");
        }
    }

    function createGrid(){
        //สุ่มตัวเลข ตำแหน่ง Path
        var temp = 100;
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
            result.push(buttonValue[j][pos]);
        }
        console.log("result: "+result);

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
            setActiveColor("#7F8080");//เปลี่ยน Path กลับเป็นสีเทา
        }, timedisplay);
    }
    

    createGrid();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Normal Mode</Text>
            <Text style={styles.header}>Score: {score}</Text>
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
