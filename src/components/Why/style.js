import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f7fc;
  padding: 48px 0 34px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  padding: 0 130px;
  max-width: 1460px;
  width: 100%;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-bottom: 24px;
`;

const Content = styled.div`
  margin-top: 28px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled.div``;

export { Wrapper, Container, Content, IconWrap, Card };
