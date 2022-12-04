import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { mockBoardDataGenerator } from "../database/mockBoardData";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { useEffect } from "react";
import { BoardItem } from "../components/moleculers/BoardItem";

export const BoardScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "BoardScreen">>();
  const boardTitle = route.params.title;
  const boardData = mockBoardDataGenerator(boardTitle);

  useEffect(() => {
    navigation.setOptions({ title: boardTitle });
  }, [boardTitle, navigation]);

  return (
    <ScrollView>
      {boardData.map((boardData, index) => (
        <BoardItem onClick={() => {}} itemInfo={boardData}></BoardItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  writeBoard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 24,
    width: 133,
    height: 55,
  },

  writeBoardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
