import styled from "styled-components";
import { IMG_URL } from "../../contents";

export const Containal = styled.section`
  padding: 50px 2%;
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const MovieBg = styled.div`
  height: 400px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
