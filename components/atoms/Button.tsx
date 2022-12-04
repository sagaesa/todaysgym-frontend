import { StyleSheet, Dimensions, View, Pressable, Text } from "react-native";
import { Button as DefaultButton } from "react-native";

export interface ButtonProps {
  onClickHandler(): void;
  title: string;
  disabled: boolean;
}

export const Button = ({ onClickHandler, title, disabled }: ButtonProps) => {
  const styles = buttonStyles(disabled);

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

const buttonStyles = (disabled: boolean) => {
  const buttonBackgroundColor = disabled ? "#D5D5D6" : "#007AFF";

  return StyleSheet.create({
    container: {
      borderRadius: 12,
      width: Dimensions.get("window").width - 50,
      fontSize: 14,
      color: "#FFFFFF",
      backgroundColor: buttonBackgroundColor,
      display: "flex",
      alignItems: "center",
      padding: 16,
      height: 55,
    },
    title: {
      fontSize: 14,
      color: "#FFFFFF",
      fontWeight: "500",
    },
  });
};
