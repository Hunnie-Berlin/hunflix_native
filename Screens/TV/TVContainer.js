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
    setShows({
      isLoading: false,
      airingToday,
      popular,
      topRated,
      airingTodayError,
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
