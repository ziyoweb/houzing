import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button, Yandex } from "../Generic/index";
import {
  Wrapper,
  Container,
  ImgWrapper,
  Section,
  Info,
  Title,
  Text,
  Details,
  Icons,
  Btns,
  Description,
  User,
  Feature,
} from "./style";
import { Checkbox } from "antd";
import Recommended from "../Recommended";
import user from "../../assets/imgs/customer.png";

const HouseItem = () => {
  const [data, setData] = useState({});
  const [showMore, setShowMore] = useState(false);

  const params = useParams();

  useEffect(() => {
    // request({ url: `/houses/list/${params?.id}` }).then((res) =>
    //   setData(res?.data || [])
    // );
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`
      // {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  console.log(data);

  return (
    <Wrapper>
      <Container>
        <ImgWrapper>Here will be imgs</ImgWrapper>
        <Section>
          <Section.Left>
            <Info>
              <div>
                <Title>{data?.address}</Title>
                <Text>
                  {data?.city} {data?.country} {data?.region}
                </Text>
              </div>
              <Btns>
                <Btns.Item>
                  <Icons.Wrap>
                    <Icons.Share />
                  </Icons.Wrap>
                  Share
                </Btns.Item>
                <Btns.Item ml={true}>
                  <Icons.Wrap>
                    <Icons.Like />
                  </Icons.Wrap>
                  Save
                </Btns.Item>
              </Btns>
            </Info>
            <Info>
              <Details>
                <Details.Item>
                  <Icons.Bed />
                  <div className="info">
                    {data.houseDetails?.beds || 0} Beds
                  </div>
                </Details.Item>
                <Details.Item>
                  <Icons.Bath />
                  <div className="info">
                    {data.houseDetails?.bath || 0} Baths
                  </div>
                </Details.Item>
                <Details.Item>
                  <Icons.Car />
                  <div className="info">
                    {data.houseDetails?.garage || 0} Garage
                  </div>
                </Details.Item>
                <Details.Item>
                  <Icons.Ruler />
                  <div className="info">
                    {data.houseDetails?.area || 0} Sq Ft
                  </div>
                </Details.Item>
                <Details.Item>
                  <Icons.Calendar />
                  <div className="info">
                    Year Built: {data.houseDetails?.yearBuilt || 0}{" "}
                  </div>
                </Details.Item>
              </Details>
              <div>
                <Info.SellPrice>
                  <del>${data?.salePrice} /mo</del>
                </Info.SellPrice>
                <Info.Price>${data?.price} /mo</Info.Price>
              </div>
            </Info>
            <Description>
              <Title dsc={true}>Description</Title>
              <Description.Text showMore={showMore}>
                Occupying over 8,000 square feet, perched over 1,100 feet in the
                air with absolutely breathtaking panoramic 360-degree views of
                all of New York City and the surrounding tri-state area, The
                82nd Floor at 432 Park Avenue has been completely reimagined by
                one of the most sought-after design houses in London and
                represents an utterly unique opportunity to own a globally
                significant property. The residence is comprised of 5 bedrooms,
                2 master bathrooms, 4 on-suite guest bathrooms, 2 powder rooms,
                2 offices, 2 dressing rooms, a media room, an oversized eat-in
                gourmet chef's kitchen, and a sprawling 1,100 square-foot Great
                Room perfectly situated in the prime southwest corner of the
                floor.
              </Description.Text>
              <p
                onClick={() => {
                  setShowMore(!showMore);
                  console.log(showMore);
                }}
              >
                {showMore ? "show less" : "show more"}
              </p>
            </Description>
            <Feature>
              <Title dsc={true}>Features</Title>
              <Feature.Content>
                <Feature.Item>1</Feature.Item>
                <Feature.Item>2</Feature.Item>
                <Feature.Item>3</Feature.Item>
                <Feature.Item>4</Feature.Item>
              </Feature.Content>
            </Feature>
            <Title dsc={true}>Location</Title>
            <Yandex />
          </Section.Left>
          <Section.Right>
            <User>
              <User.Img src={user} />
              <User.Data>
                <User.Name>
                  {data?.user?.firstname || "someone"}{" "}
                  {data?.user?.lastname || "someone"}
                </User.Name>
                <User.Email>{data?.user?.email || "not given"}</User.Email>
              </User.Data>
            </User>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width="%">Send request</Button>
          </Section.Right>
        </Section>
      </Container>
      <Recommended
        text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
        title="Similar listings"
      />
    </Wrapper>
  );
};

export default HouseItem;
