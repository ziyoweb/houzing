/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Info } from "./style";
import HouseCard from "./../HouseCard";
import Filter from "../Filter";
import { useLocation, useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const request = useRequest();
  const navigate = useNavigate();

  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  console.log(data);

  const onSelect = (id) => {
    console.log(id);
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <Filter />
      <Info>
        <div className="title">Properties</div>
        <div className="describleText">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Info>
      <Container>
        {data ? (
          data.map((value, index) => (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={index}
              data={value}
            />
          ))
        ) : (
          <h3 style={{ margin: "150px 0", textAlign: "center" }}>
            No such information found
          </h3>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Properties;
