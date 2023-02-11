import React from "react";
import { Container } from "./style";
import Filter from "../Filter";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import Banner from "../Banner";

const Home = () => {
  return (
    <Container>
      <Filter />
      <GenCarousel />
      <Recommended
        text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
        title="Recommended"
      />
      <Why />
      <Category />
      <Banner />
      <Recommended
        text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
        title="Recent Properties for Rent"
      />
    </Container>
  );
};

export default Home;
