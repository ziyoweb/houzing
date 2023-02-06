import React from "react";
import { Container } from "./style";
import Filter from "../Filter";
import GenCarousel from "../../components/Carousel";

const Home = () => {
  return (
    <Container>
      <Filter />
      <GenCarousel />
    </Container>
  );
};

export default Home;
