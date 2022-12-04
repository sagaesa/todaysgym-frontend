import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native";
export interface TextAreaProps {
  onChangeHandler(text: string): void;
  placeholder?: string;
}

export const TextArea = ({ onChangeHandler, placeholder }: TextAreaProps) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      onChangeText={onChangeHandler}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    padding: 7,
    fontSize: 12,
  },
});
