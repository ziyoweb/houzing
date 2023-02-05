import React, { useRef } from "react";
import { Container, Arrow, Img, Blur, Content } from "./style";
import { Carousel } from "antd";
import house1 from "../../assets/imgs/house1.png";
import house2 from "../../assets/imgs/house2.png";
import house3 from "../../assets/imgs/house4.jpg";
import { Button } from "../Generic";

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel /*autoplay*/ ref={slider} afterChange={onChange}>
        <Img height={571} src={house1} />
        <Img height={571} src={house2} />
        <Img height={571} src={house3} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
        <Button width={180} type="dark">
          Read more
        </Button>
      </Content>
      <Arrow data-name="left" onClick={onMove} left="true" />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
