import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView
        style={{ marginBottom: 30 }}
        horizontal
        contentContainerStyle={{ paddingLeft: 16 }}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
};

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
