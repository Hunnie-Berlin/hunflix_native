import React, { useState, useEffect } from "react";
import { moviesApi } from "../../api";
import DiscoveryPresenter from "./DiscoveryPresenter";

const Discovery = () => {
  const [movies, setMovies] = useState({
    discover: [],
    discoverError: null,
  });
  const getData = async () => {
    const [discover, discoverError] = await moviesApi.discover();
    setMovies({
      discover,
      discoverError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <DiscoveryPresenter {...movies} />;
};

export default Discovery;
