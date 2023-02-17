import React, { useState } from "react";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Container, Title } from "./style";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const request = useRequest();

  const notify = (title, type) =>
    toast[type](title, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
          notify("You are registered", "success");
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          localStorage.setItem("token", res?.authenticationToken);
        } else {
          notify("Wrong Email or Password", "error");
        }
      }
    );
  };

  return (
    <Container>
      <ToastContainer />

      <Title>Sign in</Title>
      <Input onChange={onChange} type="email" placeholder="email" />
      <Input onChange={onChange} type="text" placeholder="password" />
      <Button onClick={onSubmit} width="%">
        Login
      </Button>
    </Container>
  );
};

export default Signin;

//xasanabdurazakov_100@mail.ru
//Ss20010806
