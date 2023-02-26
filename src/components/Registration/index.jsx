import React, { useState } from "react";
import Signup from "../Signup";
import Signin from "./../Signin/index";
import { Tabs } from "antd";
import { Container } from "./style";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("1");
  const onChange = (key) => {
    console.log(key);
  };

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: `Sign in`,
      children: <Signin />,
    },
    {
      key: "2",
      label: `Sign up`,
      children: <Signup handleTabClick={handleTabClick} />,
    },
  ];

  return (
    <Container>
      <Tabs
        onTabClick={handleTabClick}
        activeKey={activeTab}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </Container>
  );
};

export default Registration;
