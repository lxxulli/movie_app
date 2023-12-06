import styled from "styled-components";
import { IMG_URL } from "../../contents";
import { mainColors, mainText } from "../style/GlobalStyled";

export const Containal = styled.section`
  padding: 50px 0 0 2%;
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const MovieBg = styled.div`
  height: 360px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 1024px) {
    height: 320px;
  }
`;

export const ConWrap = styled.section`
  position: relative;
  top: 0;
  left: 65px;
`;
export const MovieBigBg = styled.div`
  height: 420px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 1024px) {
    height: 390px;
  }
`;
export const Num = styled.h3`
  font-size: 200px;
  font-family: ${mainText.pointText};
  color: ${mainColors.pointColor};
  position: absolute;
  bottom: -30px;
  left: -70px;
`;
