import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Pressable } from "react-native";

export interface BoardItemInfo {
  title: string;
  content: string;
  date: Date;
  author: string;
}

export interface BoardItemProps {
  onClick(): void;
  itemInfo: BoardItemInfo;
}
export const BoardItem = ({ onClick, itemInfo }: BoardItemProps) => {
  const { title, content, date, author } = itemInfo;
  return (
    <Pressable style={styles.container} onPress={onClick}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.contentText}>{content}</Text>
      </View>
      <View>
        <Text style={styles.authorText}>{`${date} | ${author}`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: Dimensions.get("window").width,
    paddingLeft: 11,
    paddingTop: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  titleText: {
    fontSize: 16,
    color: "#000000",
  },
  contentText: {
    fontSize: 12,
    color: "#909090",
  },
  authorText: {
    fontSize: 12,
    color: "#6C6C6C",
  },
});
