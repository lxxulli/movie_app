import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { Banner } from "./Banner";

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { resultes: nowData } = await nowPlaying();
        setNowData(nowData);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  return (
    <>
      <Banner />
    </>
  );
};
