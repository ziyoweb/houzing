import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  infinite: true,
  centerPadding: "70px",
  speed: 300,
  adaptiveHeight: true,
  slidesToShow: 3,
  initialSlide: 0,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  dots: true,
  arrows: true,
  appendDots: (dots) => <h1> {dots} </h1>,
};

export const Recommended = ({ title, text }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/list`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        console.log(res, "hello");
      });
  }, []);
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="describleText">{text} </div>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              padding={10}
              onClick={() => navigate(`/properties/${value.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
