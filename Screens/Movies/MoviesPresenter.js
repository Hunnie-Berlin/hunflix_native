import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import { apiImage } from "../../api";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;

const MoviesPresenter = ({ isLoading, nowPlaying }) => {
  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <>
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  bgImg={apiImage(movie.backdrop_path)}
                  votes={movie.vote_average}
                  overview={movie.overview}
                  poster={apiImage(movie.poster_path)}
                />
              ))}
            </Swiper>
          </SliderContainer>
        </>
      )}
    </Container>
  );
};

export default MoviesPresenter;
