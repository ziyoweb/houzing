import React from "react";
import { Container, Img, Blur, Content } from "./style";
import house2 from "../../assets/imgs/house2.jpg";
import { Button } from "../Generic";

const Banner = () => {
  return (
    <Container>
      <Img height={571} src={house2} />
      <Blur />
      <Content>
        <Content.Title banner={true}>
          Vermont Farmhouse With Antique Jail Is <br /> the Week's Most Popular
          Home
        </Content.Title>
        <Button width={180} type="primary">
          Read more
        </Button>
      </Content>
    </Container>
  );
};

export default Banner;
