import React, { useState, useEffect } from "react";
import { Container, Info } from "./style";
import HouseCard from "./../HouseCard";
import Filter from "../Filter";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);

  return (
    <>
      <Filter />
      <Info>
        <div className="title">Properties</div>
        <div className="describleText">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Info>
      <Container>
        {data.map((value, index) => (
          <HouseCard key={index} data={value} />
        ))}
      </Container>
    </>
  );
};

export default Properties;
