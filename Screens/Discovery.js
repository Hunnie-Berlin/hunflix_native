import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { moviesApi } from "../api";

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
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>{movies.discover.length}</Text>
    </View>
  );
};

export default Discovery;
