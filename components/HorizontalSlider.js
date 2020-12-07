import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";

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

export default HorizontalSlider;
