import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { mockBoardDataGenerator } from "../database/mockBoardData";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { useEffect } from "react";
import { BoardItem } from "../components/moleculers/BoardItem";
import { Pressable } from "react-native";

export const BoardScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "BoardScreen">>();
  const boardTitle = route.params.title;
  const boardData = mockBoardDataGenerator(boardTitle);

  useEffect(() => {
    navigation.setOptions({ title: boardTitle });
  }, [boardTitle, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {boardData.map((boardData, index) => (
          <BoardItem onClick={() => {}} itemInfo={boardData}></BoardItem>
        ))}
      </ScrollView>
      <Pressable style={styles.writeBoard}>
        <Text style={styles.writeBoardText}>글 쓰기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  writeBoard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 133,
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    left: "50%",
    marginLeft: -66,
    bottom: 24,
  },

  writeBoardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
