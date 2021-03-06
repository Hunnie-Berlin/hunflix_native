import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-top: 20px;
  width: 130px;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 700;
  margin: 10px 0 5px;
`;

const Vertical = ({ id, isTV = false, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      isTV,
      poster,
      title,
      votes,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster poster={poster} />
        <Title numberOfLines={1}>{title}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
