import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Button } from "../components/atoms/Button";
import { View, Text } from "react-native";

export const SelectionScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.question}>주로 어떤 운동을 하시나요?</Text>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
    padding: "50 40",
  },

  question: {
    fontSize: 32,
    fontWeight: "500",
    color: "#000000",
  },
});
