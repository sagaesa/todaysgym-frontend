import { StyleSheet } from "react-native";
import { TouchableHighlight, Text } from "react-native";

export interface SelectItemProps {
  onPress(): void;
  title: string;
  active: boolean;
}

export const SelectionItem = ({ onPress, title, active }: SelectItemProps) => {
  const styles = toggleStyles(active);
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const toggleStyles = (active: boolean) => {
  const backgroundColor = active ? "#007AFF" : "#D5D5D6";
  return StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 18,
      paddingVertical: 8,
      borderRadius: 28,
      backgroundColor: backgroundColor,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFFFFF",
    },
  });
};
