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
import noimg from "../../assets/imgs/noimg.jpg";
import customer from "../../assets/imgs/customer.png";

const HouseCard = ({ data = {} }) => {
  const {
    houseDetails,
    address,
    city,
    country,
    description,
    salePrice,
    price,
    attachments,
    category,
  } = data;
  return (
    <Container>
      <Img
        src={
          (attachments[0]?.imgPath.includes("http") &&
            attachments[0]?.imgPath) ||
          noimg
        }
      />
      <Customer>
        <Customer.Img src={customer} />
      </Customer>

      <Content>
        <div className="subTitle inline">
          {country} {city} {description}
        </div>
        <div className="info inline">
          {address || "Quincy St, Brooklyn, NY, USA"}-
          {category?.name || "Category"}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Line />
      <Content footer="true">
        <Details.Item footer="true">
          <div className="info">
            <del>${price || 0}/mo</del>
          </div>
          <div className="subTitle">${salePrice || 0}/mo</div>
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
