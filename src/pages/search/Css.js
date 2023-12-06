import styled from "styled-components";
import { IMG_URL } from "../../contents";

export const Containal = styled.div``;
export const Title = styled.h3`
  margin: 40px 0 20px;
  font-size: 25px;
  font-weight: 600;
`;
export const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  row-gap: 15px;
`;
export const MovieBg = styled.div`
  height: 320px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
`;
