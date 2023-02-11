import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 96px auto;
`;

export const Info = styled.div`
  margin: 50px 0 30px;
`;
