/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { RootTabParamList } from "../types";
import { SelectionScreen } from "../screens/SelectionScreen";
import { CategoryScreen } from "../screens/CategoryScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { DailyLogScreen } from "../screens/DailyLogScreen";
import { BoardScreen } from "../screens/BoardScreen";
import { WriteBoardScreen } from "../screens/WriteBoardScreen";

export default function Navigation({}: {}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="WriteBoardScreen"
        component={WriteBoardScreen}
        options={{ title: "글 쓰기" }}
      ></Stack.Screen>
      <Stack.Screen name="BoardScreen" component={BoardScreen}></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Root"
        component={BottomTabNavigator}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="SelectionScreen"
        component={SelectionScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Category">
      <BottomTab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "게시판",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="home"></TabBarIcon>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "일정",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="calendar"></TabBarIcon>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="DailyLog"
        component={DailyLogScreen}
        options={{
          headerShown: false,
          title: "dailylog",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="user"></TabBarIcon>
          ),
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
}
// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}
//     >
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
//           title: "Tab One",
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate("Modal")}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}
//             >
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: "Tab Two",
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
