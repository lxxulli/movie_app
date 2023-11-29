import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../contents";

const MainBanner = styled.div`
  padding: 10% 5%;
  height: 80vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;
const BlackBg = styled.div``;

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowData(nowData);
        setIsLoading(false);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  console.log(nowData);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {nowData && (
            <>
              <MainBanner>
                <BlackBg $bgUrl={nowData[0].backdrop_path} />
                <h3>{nowData[0].title}</h3>
                <p>{nowData[0].overview}</p>
              </MainBanner>
            </>
          )}
        </div>
      )}
    </>
  );
};
