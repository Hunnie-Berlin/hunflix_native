import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../Screens/Movies";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Discovery from "../Screens/Discovery";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Discovery" component={Discovery} />
    </Tab.Navigator>
  );
};

export default Tabs;
