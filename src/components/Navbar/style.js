import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as navlogo } from "../../assets/icons/navlogo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  color: var(--colorText);
  height: 64px;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  cursor: ${({ logo }) => logo && "pointer"};
  display: ${({ nav }) => nav && "flex"};
  gap: ${({ nav }) => nav && "64px"};

  .active {
    color: #8cff00;
  }
`;

const Logo = styled(navlogo)``;

const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--colorText);
  text-decoration: none;
`;

const Content = styled.div`
  padding: 20px 50px 20px 16px;
  cursor: default;
  background-color: #fff;
`;

Content.Item = styled.p`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  letter-spacing: 0.5px;
  font-family: "Montserrat", sans-serif !important;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export { Container, Wrapper, Section, Logo, Link, Main, Content };
