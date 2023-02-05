import React from "react";
import {
  Container,
  Content,
  Img,
  Details,
  Icons,
  Line,
  Customer,
} from "./style";
import noimg from "../../assets/imgs/noimg.png";
import customer from "../../assets/imgs/customer.png";

const HouseCard = ({ url, title, info, bed, bath, garage, ruler }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Customer>
        <Customer.Img src={customer} />
      </Customer>

      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Line />
      <Content footer="true">
        <Details.Item footer="true">
          <div className="info">
            <del>$2,800/mo</del>
          </div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize />
          <Icons.Like />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
