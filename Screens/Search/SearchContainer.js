import React, { useState } from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    const [movies, moviesError] = await moviesApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
    console.log(results);
  };
  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={search}
      {...results}
    />
  );
};

export default SearchContainer;
