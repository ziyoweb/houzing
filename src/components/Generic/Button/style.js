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

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  border-radius: 2px;
  line-height: 20px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { Container };
