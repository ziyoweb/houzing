import React from "react";
import { Wrapper } from "./style";
import error from "../../assets/imgs/error404.jpg";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Wrapper.Img src={error} />
    </Wrapper>
  );
};

export default ErrorPage;
