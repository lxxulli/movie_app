import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../../components/Loading";

const Wrap = styled.div``;
const MainImg = styled.div``;
const ConWrap = styled.div``;
const Title = styled.div``;
const Con = styled.div``;
const VoteAverage = styled.div``;
const Runtime = styled.div``;
const ReleaseData = styled.div``;
const Genres = styled.div``;
const Desc = styled.div``;

export const Detail = () => {
  const { id } = useParams();

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <Wrap>
          <MainImg />
          <ConWrap>
            <Title></Title>
            <Con>
              <VoteAverage></VoteAverage>
              <li>|</li>
              <Runtime></Runtime>
              <li>|</li>
              <ReleaseData></ReleaseData>
            </Con>
            <Genres></Genres>
            <Desc></Desc>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
