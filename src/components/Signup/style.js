import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 64px auto;
  max-width: 580px;
  min-width: 580px;
  min-height: 376px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 24px 30px 48px;
`;

const Title = styled.h3`
  margin-right: auto;
`;

export { Container, Title };
