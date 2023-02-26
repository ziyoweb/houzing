import React, { useState } from "react";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Container, Title } from "./style";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

const Signup = ({ handleTabClick }) => {
  const [body, setBody] = useState({});
  const request = useRequest();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info(
      "Success, Please check your email and login to your profile ",
      5
    );
  };

  const onSubmit = () => {
    request({
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      info();
      handleTabClick("1");
    });
  };

  return (
    <Container>
      <Title>Sign up</Title>
      <Input onChange={onChange} type="email" placeholder="email" />
      <Input onChange={onChange} type="text" placeholder="firstname" />
      <Input onChange={onChange} type="text" placeholder="lastname" />
      <Input onChange={onChange} type="password" placeholder="password" />
      <Button onClick={onSubmit} width="%">
        Register
      </Button>
    </Container>
  );
};

export default Signup;
