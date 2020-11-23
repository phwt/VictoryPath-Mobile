import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Hard(props) {
    
    var colors = ["#F90A03", "#0323F9", "#1AF903", "#E6FC00"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randColor);
    

    let rows = []
    let nums = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]]


    for (let i = 0; i < 6; i++) {
      let row = []
      for (let j = 0; j < 6; j++) {
        row.push(
        <TouchableOpacity style={styles.grid} onPress={() => 
            this.buttonPress(nums[i][j])
        }>
        <Text style={{color:"black", fontSize:40}}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.gridlayout}>{row}</View>)
    }



    
    

    return (
        <View style={styles.container}>
        
            <Text style={styles.header}>Hard Mode</Text>
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
        width: 55,
        height: 55,
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
