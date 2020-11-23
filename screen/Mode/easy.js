import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import BgAudio from 'react-native-background-audio'

// const Width = 10;
// const Height = 10;

// var grid = [];
// var size;
// var step =
// function setup(){
//     createCanvas(400, 400);
//     initGrid();
// }
// function draw(){
//     background(21);
//     drawGride();
// }
// function drawGrid(){
//     noFill();
//     StrokeWeight(2);
//     Stroke(255);
//     var size = Math.min(width / Width, Height / Height);
// }
// function initGrid(){

//     for (var x = 0; x < Width; x++){
//         for (var y = 0; y < Height; y++){

//         }
//     }
// }

// const audio_options = {
//     source:{local: require('../assets/bgmusic.mp3')} 
//   }

export default function Easy(props) {
    // var i;
    // var j;
    // var k;
    // var row = [];
    // var col = [];
    // var colkey = 0;
    // var rowkey = 0;
    // var allcolor = ["#2fc1ce", "#ffb300", "#ff1280", "#ca8dc9", "#f9ec00", "#6f369d"];
    // var danger = "#000000";
    // var randomColor = require('randomcolor'); // import the script
    // var color = randomColor(); // a hex code for an attractive color

    let rows = []
    let nums = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        row.push(<TouchableOpacity style={styles.grid} onPress={() => this.buttonPress(nums[i][j])}>
          <Text style={{color:"black", fontSize:40}}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.gridlayout}>{row}</View>)
    }
    
    // for (j = 0; j < 4; j++) {
        
    //     colkey+=1;
    //     col.push(
    //         <TouchableOpacity key={colkey} style={styles.grid} >
    //             <Text style={{color:"black", fontSize:40}}>
    //                 {colkey}
    //             </Text>
    //         </TouchableOpacity>
            
    //     );
        
        
    // }
    // for (i = 0; i < 4; i++) {

    //     row.push(
    //         <View key={rowkey} style={styles.gridlayout}>{col.map((item) => item)}</View>
    //     )
    //     rowkey +=1;
    //     console.log(rowkey,colkey)
    // }
    // console.log("---","row")

    // function resetGrid() {

    //     grid = [];
      
    //     tileSize = Math.min(width / gridSize, height / gridSize);
      
    //       /* creates 2D array */
    //     for (var x = 0; x < gridSize; x++) {
    //       var col = [];
    //       for (var y = 0; y < gridSize; y++) {
      
    //         col.push(new Tile(x, y, false));
    //       }
    //       grid.push(col);
    //     }
      
    //   };
    // <Text style={{color:"black", fontSize:35}}>{testNum}</Text>
    // for (i = 0; i < 4; i++) {
        
    //     row.push(
    //         <View key={rowkey} style={styles.gridlayout}>{col.map((item) => item)}</View>
    //     )
    //     rowkey +=1;
    //     console.log(rowkey,"row")
    // }
    // for (j = 0; j < 4; j++) {
    //     testNum+=1
    //     col.push(
    //         <Text style={{color:"white"}}>{testNum}</Text>
             
    //     )
        
    // }
    // col.push(
    //     <Text style={{color:"white"}}>+</Text>
        
        
    // )
    //  console.log(col[1])
    // for (i = 0; i < 4; i++) {
    //     row.push(
    //         <View style={styles.gridlayout}>{col.map((item) => item)}</View>
    //     )
    // }

    //   console.log(row[1]);
    return (
        <View style={styles.container}>
        {/* <BgAudio options={audio_options}></BgAudio> */}
            <Text style={styles.header}>Easy Mode</Text>
            <View style={styles.frame}>
            {/* <Text>{row.map((item) => item)}</Text> */}
                {/* {row.map((item) => item)} */}
                {rows}
            </View>
            <View style={styles.btnrow}>
                <TouchableOpacity style={styles.btngreen}
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
        backgroundColor: 'red',
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
