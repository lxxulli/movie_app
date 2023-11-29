import { useEffect, useState } from "react";
import { nowPlaying, popular } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../contents";
import { Banner } from "./Banner";
import { MovieType } from "./MovieType";

const MainBanner = styled.div`
  padding: 200px 5%;
  height: 80vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
  h3,
  p {
    max-width: 700px;
    width: 100%;
  }
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  p {
    line-height: 20px;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.821522309711286) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowData(nowData);
        const { results: popData } = await popular();
        setPopData(popData);
        setIsLoading(false);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  console.log(popData);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {nowData && (
            <>
              <Banner data={nowData[0]} />
              <MovieType TitleName="인기 영화" data={popData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
