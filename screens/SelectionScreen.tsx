import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Button } from "../components/atoms/Button";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../types";

export const SelectionScreen = () => {
  const [submitAcitve, setSubmitActive] = useState<boolean>(true);
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>주로 어떤 운동을 하시나요?</Text>
      </View>
      <View></View>
      <View>
        <Button onClickHandler={() => {}} title="완료" disabled={true}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
  },

  questionContainer: {
    position: "absolute",
    top: 50,
    left: 40,
  },
  question: {
    fontSize: 32,
    fontWeight: "500",
    color: "#000000",
  },
});
