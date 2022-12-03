import { StyleSheet } from "react-native";
import * as color from "../constants/Colors";
import { View, Text, Image } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/sagaesa_icon.svg")}
        />
        <Text style={styles.logoTitle}>Today Gym</Text>
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
  },

  logo: {
    width: 160,
    height: 160,
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
