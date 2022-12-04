import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export const MainScreen = () => {
  return (
    <View>
      <Text>Hello Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
