import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 571px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  right: ${({ left }) => !left && "32px"};
  left: ${({ left }) => left && "32px"};
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  transition: background-color 0.2s linear;
  user-select: none;

  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

Arrow.Icon = styled(arrow)``;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Content.Title = styled.h2`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Content.Price = styled.h4`
  margin-top: 24px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
`;

export { Container, Arrow, Img, Blur, Content };
