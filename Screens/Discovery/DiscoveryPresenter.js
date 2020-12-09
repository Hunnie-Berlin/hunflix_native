import React, { useState } from "react";
import { Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const Container = styled.View`
  background-color: black;
  flex: 1;
  align-items: center;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const cardStyle = {
  position: "absolute",
  height: "80%",
  width: "90%",
  top: 70,
};

const DiscoveryPresenter = ({ discover }) => {
  const [topIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) =>
      position.setValue({ x: dx, y: dy }),
    onPanResponderRelease: () =>
      Animated.spring(position, {
        useNativeDriver: true,
        toValue: {
          x: 0,
          y: 0,
        },
        bounciness: 10,
      }).start(),
  });
  return (
    <Container>
      {discover.map((movie, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={{
                ...cardStyle,
                transform: [...position.getTranslateTransform()],
                zIndex: 1,
              }}
            >
              <Poster source={{ uri: apiImage(movie.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={{
                ...cardStyle,
              }}
            >
              <Poster source={{ uri: apiImage(movie.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};

export default DiscoveryPresenter;
