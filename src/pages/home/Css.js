import styled from "styled-components";
import { IMG_URL } from "../../contents";
import { mainColors, mainText } from "../style/GlobalStyled";

export const Containal = styled.section`
  padding: 50px 2%;
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const MovieBg = styled.div`
  height: 380px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
export const MovieBigBg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

export const ConWrap = styled.section`
  display: flex;
`;
export const Num = styled.h3`
  font-size: 200px;
  font-family: ${mainText.pointText};
  color: ${mainColors.pointColor};
`;
