import { StyleSheet, View, Text, Dimensions } from "react-native";
import { SelectionItem } from "../atoms/SelectionItem";
export interface SelectItemListProps {
  onPress: (index: number) => () => void;
  itemTitleList: string[];
  itemActiveList: boolean[];
}

export const SelectItemList = ({
  onPress,
  itemTitleList,
  itemActiveList,
}: SelectItemListProps) => {
  return (
    <View style={styles.container}>
      {itemActiveList.map((val, index) => {
        return (
          <SelectionItem
            onPress={onPress(index)}
            title={itemTitleList[index]}
            active={val}
          ></SelectionItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: Dimensions.get("window").width - 80,
  },
});
