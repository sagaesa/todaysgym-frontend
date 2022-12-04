import { StyleSheet, Dimensions, View, Pressable, Text } from "react-native";
import { Button as DefaultButton } from "react-native";

export interface ButtonProps {
  onClickHandler(): void;
  title: string;
  disabled: boolean;
}

export const Button = ({ onClickHandler, title, disabled }: ButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      style={styles.container}
      onPress={onClickHandler}
    >
      <Text style={styles.title}> {title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: Dimensions.get("window").width - 50,
    fontSize: 14,
    color: "#FFFFFF",
    backgroundColor: "#007AFF",
    display: "flex",
    alignItems: "center",
    padding: 16,
    height: 55,
    borderColor: "#818181",
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
