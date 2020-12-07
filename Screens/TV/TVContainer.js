import React, { useState, useEffect } from "react";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

const TV = () => {
  const [shows, setShows] = useState({
    isLoading: true,
    airingToday: [],
    thisWeek: [],
    popular: [],
    topRated: [],
    airingTodayError: null,
    thisWeekError: null,
    popularError: null,
    topRatedEror: null,
  });
  const getData = async () => {
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedEror] = await tvApi.topRated();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    setShows({
      isLoading: false,
      airingToday,
      thisWeek,
      popular,
      topRated,
      airingTodayError,
      thisWeekError,
      popularError,
      topRatedEror,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TVPresenter {...shows} />;
};

export default TV;
