import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { movieDatail } from "../../api";
import { PageTitle } from "../../components/PageTitle";

const Wrap = styled.div`
  padding: 100px 2%;
`;
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

  const [detailData, setDetailData] = useState();
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDatail(id);
        setDetailData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, [id]);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <Wrap>
          <PageTitle titleName="detail" />
          <MainImg $bgUrl={detailData.poster_path} />
          <ConWrap>
            <Title>{detailData.title}</Title>
            <Con>
              <VoteAverage>
                평점 <span>{Math.round(detailData.vote_average)}점</span>
              </VoteAverage>
              <li>•</li>
              <Runtime>{detailData.runtime}분</Runtime>
              <li>•</li>
              <ReleaseData>{detailData.release_date}</ReleaseData>
            </Con>
            <Genres>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <Desc>{detailData.overview}</Desc>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
