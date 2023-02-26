import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Section,
  Logo,
  Link,
  Main,
  Content,
} from "./style";
import { navbar } from "../../utils/navbar";
import { Dropdown } from "antd";
import Button from "../Generic/Button";
import Footer from "../Footer";
const Navbar = () => {
  const navigate = useNavigate();

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "log-out") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`${name}`);
    }
  };

  const onClick = () => {
    navigate("/registration");
  };

  const token = localStorage.getItem("token");
  const items = [
    {
      key: "1",
      label: (
        <Content>
          <Content.Item data-name="my-profile" onClick={onClickProfile}>
            My profile
          </Content.Item>
          <Content.Item data-name="favourite" onClick={onClickProfile}>
            Favourites
          </Content.Item>
          <Content.Item data-name="log-out" onClick={onClickProfile}>
            Log out
          </Content.Item>
        </Content>
      ),
    },
  ];

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
            {token ? (
              <Dropdown
                disabled={false}
                menu={{ items }}
                destroyPopupOnHide
                placement="bottom"
                trigger={["click"]}
                arrow={{ pointAtCenter: true }}
              >
                <div>
                  <Button width="120" type={"dark"}>
                    Profile
                  </Button>
                </div>
              </Dropdown>
            ) : (
              <Button onClick={onClick} width="120" type={"dark"}>
                Sign in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
