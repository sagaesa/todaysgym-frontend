import { View, Text, Dimensions, ScrollView } from "react-native";
import { useContext } from "react";
import { UserContext } from "../global/context/userContext";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { mockDailyLogDataGenerator } from "../database/mockDailyLogData";
import {
  DailyLogItem,
  DailyLogProps,
} from "../components/moleculers/DailyLogItem";

export const DailyLogScreen = () => {
  const { user, dispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("WriteDailyLogScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome
          name="plus-square"
          onPress={handleOnPress}
          size={25}
        ></FontAwesome>
      </View>
      <ScrollView>
        {mockDailyLogDataGenerator().map((daliyLogInfo: DailyLogProps) => (
          <DailyLogItem
            imagePathList={daliyLogInfo.imagePathList}
            author={daliyLogInfo.author}
            content={daliyLogInfo.content}
          ></DailyLogItem>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    width: Dimensions.get("window").width,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    display: "flex",
    position: "absolute",
    top: 20,
    left: 20,
  },
});
