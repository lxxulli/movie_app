import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";

const SearchErrorM = styled.div`
  margin: 20px auto 0;
  font-size: 20px;
  color: ${mainColors.pointColor};
  /* 
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    height: 180px;
  } */
  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

export const SearchError = ({ text }) => {
  return <SearchErrorM>{text}</SearchErrorM>;
};
