import { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { SlideBox } from "react-native-image-slider-box";

export interface DailyLogProps {
  imagePathList: string[];
  author: string;
  content: string;
}

export const DailyLogPictureList = ({
  imagePathList,
}: {
  imagePathList: string[];
}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <View style={styles.picture}>
      <Image style={styles.picture} source={{}}></Image>
    </View>
  );
};

export const DailyLogItem = ({
  imagePathList,
  author,
  content,
}: DailyLogProps) => {
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{author}</Text>
    </View>
    <DailyLogPictureList imagePathList={imagePathList}></DailyLogPictureList>
    <View></View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    width: 390,
    height: 40,
    paddingLeft: 11,
  },

  headerTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },

  pictureContainer: {
    flex: 1,
    width: 390,
    height: 390,
  },
  picture: {
    width: 390,
    height: 390,
  },
  content: {
    width: 390,
    height: 40,
  },
});
