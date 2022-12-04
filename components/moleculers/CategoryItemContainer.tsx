import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { CategoryItem } from "../atoms/CategoryItem";
import { CategoryItemStyle } from "../atoms/CategoryItem";

export const CategoryItemContainer = () => {
  const navigation = useNavigation();

  const categoryTitleList = [
    "전체",
    "주짓수",
    "무에타이",
    "필라테스",
    "크로스핏",
    "헬스",
  ];

  //TODO: Implement navigate with title information
  const handleCategoryItemClick = (title: string) => () => {
    navigation.navigate("BoardScreen", { title: title });
  };

  const getStyle = (index: number, length: number): CategoryItemStyle => {
    if (index === 0) return "TOP";
    if (index === length - 1) return "END";
    return "MIDDLE";
  };

  return (
    <View style={styles.container}>
      {categoryTitleList.map((title, index) => {
        const style = getStyle(index, categoryTitleList.length);
        return (
          <CategoryItem
            onClick={handleCategoryItemClick(title)}
            title={title}
            style={style}
          ></CategoryItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
