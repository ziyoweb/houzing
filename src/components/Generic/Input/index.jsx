import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  value,
  name,
  width,
  height,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <Container
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
