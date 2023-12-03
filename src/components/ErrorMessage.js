import styled from "styled-components";
import { mainColors } from "../pages/style/GlobalStyled";

const SErrorMessage = styled.div`
  color: ${mainColors.pointColor};
  margin-top: 10px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
