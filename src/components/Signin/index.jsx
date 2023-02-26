import React, { useState } from "react";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Container, Title } from "./style";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

const Signin = () => {
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const request = useRequest();

  const info = () => {
    message.success("Successfully logged in ");
  };
  const error = () => {
    message.error("Email or password wrong ");
  };
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = () => {
    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
          info();
        } else {
          error();
        }
      }
    );
  };

  return (
    <Container>
      <Title>Sign in</Title>
      <Input onChange={onChange} type="email" placeholder="email" />
      <Input onChange={onChange} type="password" placeholder="password" />
      <Button onClick={onSubmit} width="%">
        Login
      </Button>
    </Container>
  );
};

export default Signin;

//xasanabdurazakov_100@mail.ru
//Ss20010806
// auth2 is initialized with gapi.auth2.init() and a user is signed in.

// if (auth2.isSignedIn.get()) {
//   var profile = auth2.currentUser.get().getBasicProfile();
//   console.log('ID: ' + profile.getId());
//   console.log('Full Name: ' + profile.getName());
//   console.log('Given Name: ' + profile.getGivenName());
//   console.log('Family Name: ' + profile.getFamilyName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail());
// }
