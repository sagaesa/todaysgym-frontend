import { CategoryItemContainer } from "../components/moleculers/CategoryItemContainer";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
export const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <CategoryItemContainer></CategoryItemContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 80,
  },
});
