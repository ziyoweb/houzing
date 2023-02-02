import React from "react";
import { Container } from "./style";
import { Button, Input } from "../Generic";

const Home = () => {
  return (
    <Container>
      Home
      <Input width={200} height={44} placeholder="Region" />
      <Button>Test</Button>
    </Container>
  );
};

export default Home;
