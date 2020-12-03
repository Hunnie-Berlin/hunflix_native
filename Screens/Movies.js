import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { moviesApi } from "../api";

const Movies = () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await moviesApi.nowPlaying();
    const [popular, popularError] = await moviesApi.popular();
    const [upcoming, upcomingError] = await moviesApi.upcoming();
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>{movies.nowPlaying.length}</Text>
    </View>
  );
};

export default Movies;
