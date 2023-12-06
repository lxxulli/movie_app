import styled from "styled-components";
import { IMG_URL } from "../../contents";

export const Containal = styled.div``;
export const Title = styled.h3`
  margin: 40px 0 20px;
  font-size: 25px;
  font-weight: 600;
  @media screen and (max-width: 375px) {
    margin: 20px 0;
  }
`;
export const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 13px;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;
export const MovieBg = styled.div`
  height: 350px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 1475px) {
    height: 290px;
  }
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    height: 180px;
  }
  @media screen and (max-width: 375px) {
    height: 120px;
  }
`;
