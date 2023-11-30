import styled from "styled-components";
import { IMG_URL } from "../../contents";

const MainBanner = styled.div`
  padding: 200px 5%;
  height: 85vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
  h3,
  p {
    max-width: 700px;
    width: 100%;
    position: relative;
  }
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  p {
    line-height: 20px;
    font-size: 18px;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  // eslint-disable-next-line
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9005235602094241) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Banner = ({ data }) => {
  return (
    <MainBanner $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 150) + ".."}</p>
    </MainBanner>
  );
};
