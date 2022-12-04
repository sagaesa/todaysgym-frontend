import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native";

export type CategoryItemStyle = "TOP" | "MIDDLE" | "END";

export interface CategoryItemProps {
  onClick(): void;
  title: string;
  style: CategoryItemStyle;
}

export const CategoryItem = ({ onClick, title, style }: CategoryItemProps) => {
  const itemStyles = categoryStyles(style);

  return (
    <TouchableHighlight style={itemStyles.container} onPress={onClick}>
      <Text style={itemStyles.title}>{title}</Text>
    </TouchableHighlight>
  );
};

const categoryStyles = (style: CategoryItemStyle) => {
  const titleStyle = {
    fontSize: 14,
    color: "#676767",
  };

  switch (style) {
    case "TOP":
      return StyleSheet.create({
        container: {
          display: "flex",
          padding: 13,
          width: Dimensions.get("window").width - 60,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: "#F4F4F4",
        },
        title: titleStyle,
      });
    case "END":
      return StyleSheet.create({
        container: {
          display: "flex",
          padding: 13,
          width: Dimensions.get("window").width - 60,
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#F4F4F4",
        },
        title: titleStyle,
      });
    default:
      return StyleSheet.create({
        container: {
          display: "flex",
          padding: 13,
          width: Dimensions.get("window").width - 60,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: "#F4F4F4",
        },
        title: titleStyle,
      });
  }
};
