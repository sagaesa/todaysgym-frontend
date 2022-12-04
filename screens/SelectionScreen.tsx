import { PerpectiveTransform, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Button } from "../components/atoms/Button";
import { View, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { PreferExercises, UserContext } from "../global/context/userContext";
import { SelectItemList } from "../components/moleculers/SelectionItemList";
import { useNavigation } from "@react-navigation/native";

export const SelectionScreen = () => {
  const selectItemTitleList: PreferExercises[] = [
    "헬스",
    "주짓수",
    "무에타이",
    "극진 가라데",
    "태권도",
    "삼보",
    "절권도",
    "킥복싱",
    "우슈",
    "프로 레슬링",
    "복싱",
    "쿠도",
  ];
  const [submitAcitve, setSubmitActive] = useState<boolean>(true);
  const [selectItemActiveList, setSelectItemActiveList] = useState<boolean[]>(
    selectItemTitleList.map(() => false)
  );

  const { user, dispatch } = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const activeUserPreferInfoLength = selectItemTitleList.filter(
      (title, index) => selectItemActiveList[index] === true
    ).length;

    console.log(activeUserPreferInfoLength);

    if (activeUserPreferInfoLength !== 0) {
      setSubmitActive(false);
    } else {
      setSubmitActive(true);
    }
  }, [selectItemActiveList, setSelectItemActiveList]);

  const handleItemClick = (index: number) => () => {
    const changeArray = [...selectItemActiveList];
    changeArray[index] = !changeArray[index];
    setSelectItemActiveList(changeArray);
  };

  const handleSubmit = () => {
    const userPreferInfo = selectItemTitleList.filter(
      (title, index) => selectItemActiveList[index] === true
    );
    dispatch({ ...user, preferExercises: userPreferInfo });
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>주로 어떤 운동을 하시나요?</Text>
      </View>
      <View></View>
      <View>
        <SelectItemList
          itemActiveList={selectItemActiveList}
          itemTitleList={selectItemTitleList}
          onPress={handleItemClick}
        ></SelectItemList>
      </View>
      <View>
        <Button
          onClickHandler={handleSubmit}
          title="완료"
          disabled={submitAcitve}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
  },

  questionContainer: {
    position: "absolute",
    top: 50,
    left: 40,
  },
  question: {
    fontSize: 32,
    fontWeight: "500",
    color: "#000000",
  },
});
