import { RouteProp, useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types";
import { TextArea } from "../components/moleculers/TextArea";
import { Button } from "../components/atoms/Button";
export interface WriteBoardProps {}
export interface WriteBoardInfo {}

export const WriteBoardScreen = () => {
  const [content, setContent] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "WriteBoardScreen">>();
  const boardTitle = route.params.title;

  const handleSubmit = () => {
    // TODO Implement create board
    navigation.goBack();
  };

  const handleChange = (text: string) => () => {
    setContent(text);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: <View>{boardTitle}</View>,
    });
  }, [navigation, content, boardTitle]);

  useEffect(() => {
    if (content.length !== 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [content, setContent]);

  return (
    <View style={styles.container}>
      <TextArea onChangeHandler={handleChange} />
      <Button
        title="완료"
        onClickHandler={handleSubmit}
        disabled={submitDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("window").height,
    paddingBottom: 50,
  },

  submitButton: {
    marginTop: "auto",
  },
});
