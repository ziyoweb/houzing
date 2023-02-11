import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 571px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
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
`;

Content.Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
`;

export { Container, Img, Blur, Content };
