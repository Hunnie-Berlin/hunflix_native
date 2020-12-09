import React, { useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

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
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 150) {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(() => setTopIndex(topIndex + 1));
      } else if (dx <= -150) {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
        }).start(() => setTopIndex(topIndex + 1));
      } else {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: 0,
            y: 0,
          },
          bounciness: 10,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ["-15deg", "0deg", "15deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: [0.9, 0.3, 0.9],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {discover.map((movie, index, arr) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={{
                ...cardStyle,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
                zIndex: 1,
              }}
            >
              <Poster source={{ uri: apiImage(movie.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={{
                ...cardStyle,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
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
                zIndex: -index,
                opacity: 0,
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
