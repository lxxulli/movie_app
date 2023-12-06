import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";

const SearchErrorM = styled.div`
  margin-top: 15px;
  margin-left: 85px;
  font-size: 18px;
  color: ${mainColors.pointColor};
`;

export const SearchError = ({ text }) => {
  return <SearchErrorM>{text}</SearchErrorM>;
};
