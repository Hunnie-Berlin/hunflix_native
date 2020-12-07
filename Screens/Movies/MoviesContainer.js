import React, { useEffect, useState } from "react";
import { moviesApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

const MoviesContainer = () => {
  const [movies, setMovies] = useState({
    isLoading: true,
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
      isLoading: false,
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

  return <MoviesPresenter refreshFn={getData} {...movies} />;
};

export default MoviesContainer;
