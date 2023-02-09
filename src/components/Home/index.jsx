import React from "react";
import { Container } from "./style";
import Filter from "../Filter";
import GenCarousel from "../Carousel";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <Filter />
      <GenCarousel />
      <Category />
    </Container>
  );
};

export default Home;
