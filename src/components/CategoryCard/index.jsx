import React from "react";
import { Container, Content, Img, Blur } from "./style";
import noimg from "../../assets/imgs/noimg.png";
import category from "../../assets/imgs/category.png";

const HouseCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

export default HouseCard;
