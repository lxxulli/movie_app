import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";

const SearchErrorM = styled.div`
  margin: 20px auto 0;
  font-size: 20px;
  color: ${mainColors.pointColor};
  @media screen and (max-width: 375px) {
    font-size: 16px;
    margin: 10px auto 0;
  }
`;

export const SearchError = ({ text }) => {
  return <SearchErrorM>{text}</SearchErrorM>;
};
