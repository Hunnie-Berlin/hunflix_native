import React from "react";
import styled from "styled-components/native";

import Title from "./Title";

const Container = styled.View``;

const List = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <Container>{children}</Container>
    </>
  );
};

export default List;