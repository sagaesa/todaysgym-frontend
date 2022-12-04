import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { TextInput as DefaultTextInput } from "react-native";

export interface TextInputProps {
  onChangeHandler(text: string): void;
  placeHolder?: string;
}

export const TextInput = ({ onChangeHandler, placeHolder }: TextInputProps) => {
  return (
    <DefaultTextInput
      style={styles.container}
      placeholder={placeHolder ?? placeHolder}
      onChangeText={onChangeHandler}
    ></DefaultTextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: Dimensions.get("window").width - 50,
    fontSize: 14,
    color: "#6F6F6F",
    padding: 16,
    height: 55,
    borderWidth: 1,
  },
});
