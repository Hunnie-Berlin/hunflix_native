import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import PropTypes from "prop-types";

const ScrollContainer = ({ isLoading, children }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: isLoading ? 1 : 0,
        justifyContent: isLoading ? "center" : "flex-start",
      }}
    >
      {isLoading ? <ActivityIndicator color="white" size="large" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
