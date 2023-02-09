import React from "react";
import { Wrapper, Container, Content, Img, Blur } from "./style";
import noimg from "../../assets/imgs/noimg.png";
import category from "../../assets/imgs/category.png";

const HouseCard = ({ data = {}, onClick }) => {
  const { name } = data;
  return (
    <Wrapper>
      <Container onClick={onClick}>
        <Img src={category || noimg} />
        <Blur />
        <Content>{name || "Category name"}</Content>
      </Container>
    </Wrapper>
  );
};

export default HouseCard;
