import React, { useState, useEffect } from "react";
import { Container, Info } from "./style";
import HouseCard from "./../HouseCard";
import Filter from "../Filter";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        window.scrollTo(0, 0);
      });
  }, [search]);

  const navigate = useNavigate();

  const onSelect = (id) => {
    console.log(id);
    navigate(`/properties/${id}`);
  };

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
          <HouseCard
            onClick={() => onSelect(value.id)}
            key={index}
            data={value}
          />
        ))}
      </Container>
    </>
  );
};

export default Properties;
