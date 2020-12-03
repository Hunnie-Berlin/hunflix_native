import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { string } from "prop-types";

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-left: 16px;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
