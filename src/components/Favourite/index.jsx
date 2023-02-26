import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { Container, Info } from "./style";
import HouseCard from "./../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "./../../context/properties/index";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch } = useQuery(
    [search],
    async () => {
      let res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
        dispatch({ type: "refetch", payload: refetch });
        // window.scrollTo(0, 0);
      },
    }
  );

  const navigate = useNavigate();

  const onSelect = (id) => {
    console.log(id);
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <Info>
        <div className="title">Favourites</div>
        <div className="describleText">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Info>
      <Container>
        {data.length ? (
          data.map((value, index) => (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          ))
        ) : (
          <h3 style={{ textAlign: " center " }}>
            There are no favorite houses yet
          </h3>
        )}
      </Container>
    </>
  );
};

export default Properties;
