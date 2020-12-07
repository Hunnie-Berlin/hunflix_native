import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Input from "../../components/Search/input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text`
  color: white;
`;

const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => {
  return (
    <ScrollContainer isLoading={false} refreshFn={onSubmit}>
      <Container>
        <Input
          placeholder={"Enter a key word"}
          value={keyword}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
          <HorizontalSlider title={"Movie Results"}>
            {movies.map((movie) => (
              <Vertical
                key={movie.id}
                id={movie.id}
                poster={apiImage(movie.poster_path)}
                title={movie.original_title}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSlider>
        )}
        {shows.length !== 0 && (
          <HorizontalSlider title={"Show Results"}>
            {shows.map((show) => (
              <Vertical
                key={show.id}
                id={show.id}
                poster={apiImage(show.poster_path)}
                title={show.original_name}
                votes={show.vote_average}
              />
            ))}
          </HorizontalSlider>
        )}
      </Container>
    </ScrollContainer>
  );
};

export default SearchPresenter;
