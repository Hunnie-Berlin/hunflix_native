import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: absolute;
  background-color: yellow;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
const Votes = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
  margin: 10px 0px 5px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
`;

const Button = styled.View`
  background-color: #e74c3c;
  padding: 3px 6px;
  border-radius: 3px;
  margin-top: 15px;
`;
const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, bgImg, votes, overview, poster }) => {
  return (
    <Container>
      <BG source={{ uri: bgImg }} />
      <Content>
        <Poster poster={poster} />
        <Data>
          <Title numberOfLines={1}>{title}</Title>
          <Votes>
            <Ionicons name="ios-star" color="gold" /> {votes} / 10
          </Votes>
          <Overview numberOfLines={6}>{overview}</Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>See Detail</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  bgImg: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
