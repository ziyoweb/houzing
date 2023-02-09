/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { Dropdown } from "antd";
import { Container, Icon, MenuWrapper, Section, SelectAntd } from "./style";
import { Button, Input } from "../Generic";
import { uzeReplace } from "../../hooks/uzeReplace";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "./../../hooks/useSearch";

const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Category");

  const { REACT_APP_BASE_URL: url } = process.env;

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minpriceRef = useRef();
  const maxpriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
  }, [location?.search, data]);

  const handleChange = (category_id) => {
    navigate(`${location.pathname}${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`${location.pathname}${uzeReplace("sort", sort)}`);
  };

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper onClick={(e) => e.stopPropagation()}>
          <h2 className="subTitle">Address</h2>
          <Section>
            <Input
              defaultValue={query.get("country")}
              onChange={onChange}
              name="country"
              ref={countryRef}
              type="text"
              placeholder="Country"
            />
            <Input
              defaultValue={query.get("region")}
              onChange={onChange}
              name="region"
              ref={regionRef}
              type="text"
              placeholder="Region"
            />
            <Input
              defaultValue={query.get("city")}
              onChange={onChange}
              name="city"
              ref={cityRef}
              type="text"
              placeholder="City"
            />
            <Input
              defaultValue={query.get("zip_code")}
              onChange={onChange}
              name="zip_code"
              ref={zipRef}
              type="number"
              placeholder="Zip code"
            />
          </Section>
          <h2 className="subTitle">Apartment info</h2>
          <Section>
            <Input
              defaultValue={query.get("room")}
              onChange={onChange}
              name="room"
              ref={roomsRef}
              type="number"
              placeholder="Rooms"
            />
            <SelectAntd
              defaultValue={query.get("sort") || "Sort"}
              onChange={onChangeSort}
              options={[
                { value: "", label: "All Sort" },
                { value: "asc", label: "Increase" },
                { value: "desc", label: "Decrease" },
              ]}
            />
            <SelectAntd
              defaultValue={value}
              onChange={handleChange}
              options={[
                { value: "", label: "All Category" },
                ...data.map((value) => {
                  return { value: value?.id, label: value?.name || "Empty" };
                }),
              ]}
            />
          </Section>
          <h2 className="subTitle">Price</h2>
          <Section>
            <Input
              defaultValue={query.get("min_price")}
              onChange={onChange}
              name="min_price"
              ref={minpriceRef}
              type="number"
              placeholder="Min price"
            />
            <Input
              defaultValue={query.get("max_price")}
              onChange={onChange}
              name="max_price"
              ref={maxpriceRef}
              type="number"
              placeholder="Max price"
            />
          </Section>
        </MenuWrapper>
      ),
    },
  ];

  return (
    <Container>
      <Input
        defaultValue={query.get("address")}
        onChange={onChange}
        name="address"
        icon={<Icon.Houses />}
        type="text"
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        disabled={false}
        menu={{ items }}
        destroyPopupOnHide
        placement="bottomRight"
        trigger={["click"]}
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button width={140} type="light">
            <Icon.Search />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button type="primary" width={180}>
        <Icon.Filter />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
