import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native";
export interface TextAreaProps {
  onChangeHandler(text: string): () => void;
}

export const TextArea = ({ onChangeHandler }: TextAreaProps) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => onChangeHandler(text)}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2,
    padding: 7,
    fontSize: 12,
  },
});
