import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../Screens/Detail";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export default ({ route }) => {
  const getRouteName = (route) =>
    getFocusedRouteNameFromRoute(route) || "Movies";
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={({ route }) => ({
          headerTitle: getRouteName(route),
        })}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
