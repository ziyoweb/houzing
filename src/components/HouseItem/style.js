import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as share } from "../../assets/icons/share.svg";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: 24px auto 96px auto;
`;

const ImgWrapper = styled.div``;

const Section = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

Section.Left = styled.div`
  flex: 3;
`;
Section.Right = styled.div`
  flex: 1;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

User.Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;

User.Data = styled.div``;

User.Name = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

User.Email = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

Info.SellPrice = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 0;
`;

Info.Price = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 0;
`;

const Details = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 30px;
`;

Details.Item = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div``;

Icons.Wrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:active {
    transform: scale(1.2);
  }
`;

Icons.Bed = styled(bed)`
  margin-right: 8px;
`;
Icons.Bath = styled(bath)`
  margin-right: 8px;
`;
Icons.Car = styled(car)`
  margin-right: 8px;
`;
Icons.Calendar = styled(calendar)`
  margin-right: 8px;
`;

Icons.Ruler = styled(ruler)`
  margin-right: 8px;
`;
Icons.Share = styled(share)``;

Icons.Like = styled(like)``;

const Btns = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

Btns.Item = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  display: flex;
  align-items: center;
  margin-left: ${({ ml }) => ml && "26px"};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: ${({ dsc }) => (dsc ? "18px" : "24px")};
  line-height: ${({ dsc }) => (dsc ? "28px" : "32px")};
  letter-spacing: ${({ dsc }) => (dsc ? "0.02px" : "-0.02em")};
  margin-bottom: ${({ dsc }) => (dsc ? "16px" : "8px")};

  color: #0d263b;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

const Description = styled.div`
  margin-bottom: 50px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #0061df;
    cursor: pointer;
    user-select: none;
  }
`;
Description.Text = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  position: relative;
  z-index: ${({ showMore }) => (showMore ? "9999" : "-1")};

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ showMore }) =>
      showMore
        ? "linear-gradient(180deg,transparent 0%,transparent 100%)"
        : "linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,#ffffff 100%)"};
  }
`;

const Feature = styled.div`
  padding: 40px 0;
  margin: 30px 0;
  border-top: 1px solid #e6e9ec;
  border-bottom: 1px solid #e6e9ec;
`;

Feature.Content = styled.div`
  display: flex;
`;

Feature.Item = styled.div``;

export {
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
};
