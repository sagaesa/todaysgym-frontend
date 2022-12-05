import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "react-native";
import { TextArea } from "../components/moleculers/TextArea";
import { Button } from "../components/atoms/Button";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export const WriteDailyLogScreen = () => {
  const [content, setContent] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<RootStackParamList, "WriteDailyLogScreen">>();

  const handleSubmit = () => {
    // TODO Implement create board
    navigation.goBack();
  };

  const handleChange = (text: string) => {
    console.log("Content Change!");
    setContent(text);
  };

  useEffect(() => {
    console.log("ContentLength", content.length);
    if (content.length !== 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [content, setContent]);

  return (
    <View style={styles.container}>
      <TextArea
        onChangeHandler={handleChange}
        placeholder="내용을 입력해주세요."
      />

      <View style={styles.submitContainer}>
        <View style={styles.cameraContainer}>
          <FontAwesome name={"camera"} size={25}></FontAwesome>
          <View style={styles.checkBoxContainer}></View>
        </View>
        <View style={styles.submitButton}>
          <Button
            title="완료"
            onClickHandler={handleSubmit}
            disabled={submitDisabled}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("window").height - 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cameraContainer: {
    width: Dimensions.get("window").width - 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
  },

  checkBoxLabel: {
    marginLeft: 8,
  },
  submitContainer: {
    display: "flex",
    flexDirection: "column",
  },
  submitButton: {},
});
