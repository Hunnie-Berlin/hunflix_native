import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Image = styled.Image`
  width: 130px;
  height: 190px;
  border-radius: 5px;
`;

const Poster = ({ poster }) => {
  return <Image source={{ uri: poster }} />;
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Poster;
