import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import { apiImage } from "../../api";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const Container = styled.View``;

const MoviesPresenter = ({ isLoading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollContainer isLoading={isLoading}>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              bgImg={apiImage(movie.backdrop_path || movie.poster_path)}
              votes={movie.vote_average}
              overview={movie.overview}
              poster={apiImage(movie.poster_path)}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={apiImage(movie.poster_path)}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <Title title={"Coming Soon"} />
        {upcoming.map(
          (movie) =>
            movie.poster_path && (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                releaseDate={movie.release_date}
                overview={movie.overview}
                poster={apiImage(movie.poster_path)}
              />
            )
        )}
      </Container>
    </ScrollContainer>
  );
};

export default MoviesPresenter;
