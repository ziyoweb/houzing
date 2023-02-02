import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        backgroundColor: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        backgroundColor: "#fff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        backgroundColor: "#0061DF",
        border: "1px solid transparent",
        color: "#fff",
      };

    default:
      return {
        backgroundColor: "#0061DF",
        border: "1px solid transparent",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  min-width: 120px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 2px;
  border: 1px solid #e6e9ec;
  outline-color: #0061df;
  color: black;
  padding-left: 16px;
  font-family: "Montserrat", sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  /* ${getType} */
`;

export { Container };
