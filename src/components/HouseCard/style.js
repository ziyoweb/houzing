import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  min-height: 430px;
  background: #ffffff;
  border-radius: 3px;
  position: relative;
  transition: all 0.22s linear;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  :hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding: ${({ footer }) => (footer ? "8px 20px" : "24px 20px 16px 20px")};

  span {
    color: var(--colorPrimary);
    border-radius: 5px;
    padding: 2px 5px;
    font-weight: 500;
    background-color: #e9ecef;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)`
  margin-bottom: 8px;
`;
Icons.Bath = styled(bath)`
  margin-bottom: 8px;
`;
Icons.Car = styled(car)`
  margin-bottom: 8px;
`;
Icons.Ruler = styled(ruler)`
  margin-bottom: 8px;
`;
Icons.Like = styled(like)`
  width: 35px;
  height: 35px;
  padding: 9px;
  border-radius: 50%;
  background-color: #f6f8f9;
  margin-left: 20px;
  cursor: pointer;
  user-select: none;
  transition: all 0.05s linear;
  :active {
    transform: scale(1.2);
    background-color: #f9f9f9;
  }
  stroke: 2;
`;
Icons.Resize = styled(resize)`
  cursor: pointer;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e6e9ec;
`;

const Customer = styled.div`
  position: absolute;
  right: 20px;
  border-radius: 50%;
  transform: translateY(-50%);
  /* ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background-image: linear-gradient(
      45deg,
      #0d263b,
      #ea6048,
      #ca3288,
      #575acc
    );
  } */
`;

Customer.Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid white;
`;

export { Container, Img, Content, Details, Icons, Line, Customer };
