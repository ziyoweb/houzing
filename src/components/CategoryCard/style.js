import styled from "styled-components";
// import { ReactComponent as bed } from "../../assets/icons/bed.svg";
// import { ReactComponent as bath } from "../../assets/icons/bath.svg";
// import { ReactComponent as car } from "../../assets/icons/car.svg";
// import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
// import { ReactComponent as like } from "../../assets/icons/love.svg";
// import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Wrapper = styled.div`
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  max-height: 350px;
  background-color: grey;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s linear;

  :hover {
    box-shadow: #0061df 0px 4px 12px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.7);
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
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

const Icons = styled.div``;

export { Wrapper, Container, Img, Content, Icons, Blur };
