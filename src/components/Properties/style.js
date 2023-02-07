import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;

  padding: var(--padding);

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
