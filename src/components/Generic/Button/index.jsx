import React from "react";
import { Container } from "./style";

const Button = ({ children, type, width, onClick }) => {
  return (
    <Container onClick={onClick} type={type} width={width}>
      {children || "No text"}
    </Container>
  );
};

export default Button;
