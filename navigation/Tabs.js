import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../Screens/Movies";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Discovery from "../Screens/Discovery";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          switch (route.name) {
            case "Movies":
              iconName += "film";
              break;
            case "TV":
              iconName += "tv";
              break;
            case "Search":
              iconName += "search";
              break;
            case "Discovery":
              iconName += "heart";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Discovery" component={Discovery} />
    </Tab.Navigator>
  );
};

export default Tabs;
