import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 5px 30px 10px;
  padding: 8px 16px;
  border-radius: 20px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
    autoCorrect={false}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
