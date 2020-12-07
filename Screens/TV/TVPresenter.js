import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import { apiImage } from "../../api";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View``;

const TVPresenter = ({ isLoading, popular, topRated, airingToday }) => {
  return (
    <ScrollContainer isLoading={isLoading}>
      <Container>
        <HorizontalSlider title={"Popular Shows"}>
          {popular.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={apiImage(show.poster_path)}
              title={show.original_name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated Shows"}>
          {topRated.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={apiImage(show.poster_path)}
              title={show.original_name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Airing Today"}>
          {airingToday.map(
            (show) =>
              show.poster_path && (
                <Horizontal
                  key={show.id}
                  id={show.id}
                  title={show.original_name}
                  overview={show.overview}
                  poster={apiImage(show.poster_path)}
                />
              )
          )}
        </List>
      </Container>
    </ScrollContainer>
  );
};

export default TVPresenter;
