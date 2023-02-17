import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import Footer from "../Footer";
const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={true}>
            <Logo />
          </Section>
          <Section nav={true}>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button
              onClick={() => navigate("/signin")}
              width="120"
              type={"dark"}
            >
              {token ? "Profile" : "Sign in"}
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
