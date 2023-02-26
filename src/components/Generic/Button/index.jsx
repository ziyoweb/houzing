import React from "react";
import { Container } from "./style";

const Button = ({ height, fontSize, children, type, width, onClick }) => {
  return (
    <Container
      fontSize={fontSize}
      height={height}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children || "No text"}
    </Container>
  );
};

export default Button;
