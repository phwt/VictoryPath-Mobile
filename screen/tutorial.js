import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// class Tutorial extends React.Component() {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => {
//             props.navigation.navigate("GameScreen");
//           }}
//         >
//           <Image
//             style={styles.exitbt}
//             source={require("../assets/arrow.png")}
//           />
//         </TouchableOpacity>
//         <Text style={styles.settext}>
//           <Text style={styles.text1}>How to </Text>
//           <Text style={styles.text2}>Play</Text>
//         </Text>
//         <Button
//           title="Easy"
//           onPress={() => {
//             this.setState({ show: true });
//           }}
//         >
//           <Model transparent={true} visible={this.state.show}>
//             <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
//               <View
//                 style={{
//                   backgroundColor: "#ffffff",
//                   margin: 50,
//                   padding: 40,
//                   borderRadius: 10,
//                 }}
//               >
//                 <Text>Model Test</Text>
//               </View>
//             </View>
//           </Model>
//         </Button>
//       </View>
//     );
//   }
// }

export default function Tutorial(props) {
  const [show, setShow] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("GameScreen");
        }}
      >
        <Image style={styles.exitbt} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <Text style={styles.settext}>
        <Text style={styles.text1}>How to </Text>
        <Text style={styles.text2}>Play</Text>
      </Text>
      <ScrollView>
        <View style={{ marginLeft: "5%", marginTop: "5%" }}>
          <Text
            style={{
              color: "red",
              fontSize: 18,
              margin: 15,
              fontWeight: "bold",
            }}
          >
            1. เลือกโหมด ซึ่งมีทั้งหมด 4 โหมด โดยแต่ละโหมดจะมีความยากต่างกันไป
          </Text>
          <Text style={styles.setpositiontextinbox}>
            - Easy จะมีบล็อคทั้งหมด 4*4 บล็อค
          </Text>
          <Text style={styles.setpositiontextinbox}>
            - Normal จะมีบล็อคทั้งหมด 6*6 บล็อค
          </Text>
          <Text style={styles.setpositiontextinbox}>
            - Hard จะมีบล็อคทั้งหมด 6*6 บล็อค แต่จะมีความเร็วมากกว่าโหมด Normal
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 18,
              margin: 15,
              fontWeight: "bold",
            }}
          >
            2. หลังจากทำการเลือกโหมดแล้ว จะทำเข้าสู่หน้าหลักของเกม
            หลักจากนั้นกดปุ่มไปตามที่ไฟกระพริบขึ้นมาในแต่ละบล็อค
            หลังจากไฟขึ้นมาแล้ว ไฟจะดับลง เราจะต้องจำให้ได้ว่า
            ไฟดวงไหนบ้างที่ติดขึ้นมา และกดตาม ถ้าคุณทำได้ คุณจะได้คะแนนเพิ่ม
            หากคุณกดพลาด เกมจะจบลง
          </Text>
          <Image
            style={styles.howtoplay}
            source={require("../assets/howtoplay.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  howtoplay: {
    width: "100%",
    height: 200,
  },
  setpositiontextinbox: {
    color: "white",
    fontSize: 15,
    marginBottom: 7,
    marginLeft: 20,
    marginRight: 20,
  },
  exitbt: {
    width: 25,
    height: 25,
    marginLeft: "10%",
    marginTop: "10%",
    marginRight: "90%",
    transform: [{ rotate: "180deg" }],
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

// export default Tutorial;
