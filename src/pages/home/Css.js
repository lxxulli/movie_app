import styled from "styled-components";
import { IMG_URL } from "../../contents";
import { mainColors, mainText } from "../style/GlobalStyled";

export const Containal = styled.section`
  padding: 50px 0 0 2%;
  @media screen and (max-width: 375px) {
    padding: 30px 0 0 2%;
  }
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
export const MovieBg = styled.div`
  height: 420px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 1475px) {
    height: 310px;
  }
  @media screen and (max-width: 1024px) {
    height: 210px;
  }
  @media screen and (max-width: 768px) {
    height: 240px;
  }
  @media screen and (max-width: 375px) {
    height: 150px;
  }
`;

export const ConWrap = styled.section`
  position: relative;
  top: 0;
  left: 65px;
  @media screen and (max-width: 375px) {
    left: 30px;
  }
`;
export const MovieBigBg = styled.div`
  height: 530px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 1475px) {
    height: 400px;
  }
  @media screen and (max-width: 1024px) {
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    height: 260px;
  }
  @media screen and (max-width: 375px) {
    height: 190px;
  }
`;
export const Num = styled.h3`
  font-size: 200px;
  font-family: ${mainText.pointText};
  color: ${mainColors.pointColor};
  position: absolute;
  bottom: -30px;
  left: -50px;
  @media screen and (max-width: 1475px) {
    font-size: 180px;
    bottom: -35px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 140px;
    left: -45px;
  }
  @media screen and (max-width: 768px) {
    font-size: 140px;
    bottom: -25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 100px;
    left: -30px;
    bottom: -15px;
  }
`;
