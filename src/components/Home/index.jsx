import React from "react";
import { Container } from "./style";
import Filter from "../Filter";
import GenCarousel from "../../components/Carousel";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <Container>
      <Filter />
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
