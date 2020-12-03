import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

const TV = () => {
  const [shows, setShows] = useState({
    airingToday: [],
    thisWeek: [],
    popular: [],
    airingTodayError: null,
    thisWeekError: null,
    popularError: null,
  });
  const getData = async () => {
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      airingToday,
      thisWeek,
      popular,
      airingTodayError,
      thisWeekError,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>{shows.airingToday.length}</Text>
    </View>
  );
};

export default TV;
