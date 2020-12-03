import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";

const Container = styled.View`
  flex-direction: row;
  margin: 20px 0px 0px 16px;
`;

const Data = styled.View`
  width: 55%;
  height: 100%;
  margin-left: 18px;
  align-items: flex-start;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 15px 0 10px;
`;
const Date = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
  margin: 5px 0;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

const Horizontal = ({ id, title, releaseDate, overview, poster }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster poster={poster} />
        <Data>
          <Title>{title}</Title>
          <Date>{releaseDate}</Date>
          <Overview numberOfLines={6}>{overview}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Horizontal;
