import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import { apiImage } from "../../api";
import Vertical from "../../components/Vertical";

const Container = styled.View``;

const TVPresenter = ({ isLoading, popular, topRated }) => {
  return (
    <ScrollContainer isLoading={isLoading}>
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
    </ScrollContainer>
  );
};

export default TVPresenter;
