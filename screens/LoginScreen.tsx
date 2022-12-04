import { Dimensions, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { Button } from "../components/atoms/Button";
import { TextInput } from "../components/atoms/TextInput";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { UserContext } from "../global/context/userContext";
import { useContext } from "react";

export const LoginScreen = () => {
  const [id, setId] = useState<string | undefined>(undefined);
  const [pwd, setPwd] = useState<string | undefined>(undefined);
  const navigation = useNavigation();

  const { user, dispatch } = useContext(UserContext);
  const [submitActive, setSubmitActive] = useState<boolean>(true);

  useEffect(() => {
    if (id !== undefined && pwd !== undefined) {
      setSubmitActive(false);
    }
  }, [id, pwd, setId, setPwd]);

  const handleSumbit = () => {
    console.log("Login Succeed");
    dispatch({ ...user, id: id, password: pwd });
    navigation.navigate("SelectionScreen", {
      loginInfo: { id: id, password: pwd },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/sagaesa_icon.svg")}
        />
        <Text style={styles.logoTitle}>Today Gym</Text>
        <View style={styles.textInput}>
          <TextInput
            placeHolder="이메일"
            onChangeHandler={(text) => {
              setId(text);
            }}
          ></TextInput>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeHolder="비밀번호"
            onChangeHandler={(text) => {
              setPwd(text);
            }}
          ></TextInput>
        </View>
        <View style={styles.submitButton}>
          <Button
            title="로그인"
            disabled={submitActive}
            onClickHandler={handleSumbit}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },

  logo: {
    width: 160,
    height: 160,
  },

  textInput: {
    marginTop: 13,
  },

  submitButton: {
    marginTop: 60,
  },

  logoTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
});
