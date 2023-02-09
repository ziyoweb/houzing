import styled from "styled-components";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  margin: 0 auto;

  width: 100%;
  max-width: 1440px;
`;

const Icon = styled.div``;

Icon.Search = styled(filter)`
  margin-right: 8px;
  & path {
    fill: #0061df;
  }
`;
Icon.Filter = styled(search)`
  margin-right: 8px;
  & path {
    fill: #fff;
  }
`;
Icon.Houses = styled(houses)`
  margin-left: 15px;
  vertical-align: center;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  cursor: default;
  background-color: #fff;

  :hover {
    background-color: #fff;
  }
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const SelectAntd = styled(Select)`
  width: 100% !important;
  color: grey;
`;

export { Container, Icon, MenuWrapper, Section, SelectAntd };
