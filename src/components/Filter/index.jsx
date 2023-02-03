import React, { useRef } from "react";
import { Dropdown } from "antd";
import { Container, Icon, MenuWrapper, Section } from "./style";
import { Button, Input } from "../Generic";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minpriceRef = useRef();
  const maxpriceRef = useRef();

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper onClick={(e) => e.stopPropagation()}>
          <h2 className="subTitle">Address</h2>
          <Section>
            <Input ref={countryRef} type="text" placeholder="Country" />
            <Input ref={regionRef} type="text" placeholder="Region" />
            <Input ref={cityRef} type="text" placeholder="City" />
            <Input ref={zipRef} type="number" placeholder="Zip code" />
          </Section>
          <h2 className="subTitle">Apartment info</h2>
          <Section>
            <Input ref={roomsRef} type="number" placeholder="Rooms" />
            <Input ref={sizeRef} type="number" placeholder="Size" />
            <Input ref={sortRef} type="text" placeholder="Sort" />
          </Section>
          <h2 className="subTitle">Price</h2>
          <Section>
            <Input ref={minpriceRef} type="number" placeholder="Min price" />
            <Input ref={maxpriceRef} type="number" placeholder="Max price" />
          </Section>
        </MenuWrapper>
      ),
    },
  ];
  return (
    <Container>
      <Input
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
