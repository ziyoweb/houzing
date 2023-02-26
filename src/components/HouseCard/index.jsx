import React, { useContext } from "react";
import {
  Wrapper,
  Container,
  Content,
  Img,
  Details,
  Icons,
  Line,
  Customer,
} from "./style";
import noimg from "../../assets/imgs/noimg.jpg";
import { message } from "antd";
import customer from "../../assets/imgs/customer.png";
import { PropertiesContext } from "./../../context/properties/index";

const HouseCard = ({ data = {}, padding, onClick }) => {
  const [state] = useContext(PropertiesContext);
  const {
    id,
    houseDetails,
    address,
    city,
    country,
    description,
    salePrice,
    price,
    attachments,
    category,
    favorite,
  } = data;

  const liked = (event) => {
    event.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Successfully disliked");
        else res?.success && message.info("Successfully liked");
        state.refetch && state.refetch();
      });
  };

  return (
    <Wrapper padding={padding}>
      <Container onClick={onClick}>
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
            {country || "empty"} {city || "empty"} {description || "empty"}
          </div>
          <div className="info inline">
            {address || "Quincy St, Brooklyn, NY, USA"}-
            {category?.name || "Category"}{" "}
            <span>{houseDetails?.room || "no"}-rooms</span>
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
              <del>${salePrice || 0} /mo</del>
            </div>
            <div className="subTitle">${price || 0} /mo</div>
          </Details.Item>
          <Details.Item row="true">
            <Icons.Resize />
            <Icons.Like onClick={liked} favorite={favorite} />
          </Details.Item>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default HouseCard;
