import React from "react";
import { Container } from "./style";
import Filter from "../Filter";
import GenCarousel from "../Carousel";
import CategoryCard from "../CategoryCard";

const Home = () => {
  return (
    <Container>
      <Filter />
      <GenCarousel />
      <CategoryCard />
    </Container>
  );
};

export default Home;
