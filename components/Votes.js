import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { string } from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Text = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
`;

const Votes = ({ votes }) => {
  return (
    <Text>
      <Ionicons name="ios-star" color="gold" /> {votes ? votes : 0} / 10
    </Text>
  );
};

Votes.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Votes;
