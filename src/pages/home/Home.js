import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../contents";
import { Banner } from "./Banner";
import { MovieType } from "./MovieType";
import { TopMovie } from "./TopMovie";
import { PageTitle } from "../../components/PageTitle";

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
  const [topData, setTopData] = useState();
  const [uploadData, setUploadData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowData(nowData);
        const { results: popData } = await popular();
        setPopData(popData);
        const { results: topData } = await topRated();
        setTopData(topData);
        const { results: uploadData } = await upcoming();
        setUploadData(uploadData);
        setIsLoading(false);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  // console.log(topData);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {nowData && (
            <>
              <PageTitle titleName="HOME" />
              <Banner data={nowData[0]} />
              <MovieType titleName="인기 영화" data={popData} />
              <MovieType titleName="현재 상영 영화" data={nowData} />
              <TopMovie titleName="TOP 20 영화" data={topData} />
              <MovieType titleName="개봉 예정 영화" data={uploadData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
