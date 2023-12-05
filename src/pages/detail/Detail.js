import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { movieDatail, movieSimilar } from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { IMG_URL } from "../../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../routes";
import { SimalarMovie } from "./SimilarMovie";
import { ScrollTop } from "../../lib/ScrollTop";

const Wrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Containal = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #464646;
  border-radius: 15px;
  margin-top: 50px;
`;
const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(27, 27, 27, 0.5);
  cursor: pointer;
`;
const ImgWrap = styled.div`
  position: relative;
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(27, 27, 27, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  position: absolute;
  top: 0;
  left: 0;
`;
const MainImg = styled.div`
  height: 400px;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const ConWrap = styled.div`
  padding: 30px 20px;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;
const Con = styled.ul`
  display: flex;
  margin: 10px 0;
  li {
    margin: 0 10px;
  }
`;
const VoteAverage = styled.div`
  span {
    color: orange;
  }
`;
const Runtime = styled.div``;
const ReleaseData = styled.div``;
const Genres = styled.ul`
  display: flex;
  margin-bottom: 15px;
  li {
    padding: 5px 10px;
    background-color: #555;
    margin-right: 10px;
    border-radius: 5px;
  }
`;
const Desc = styled.p`
  line-height: 20px;
  font-size: 16px;
`;

export const Detail = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState();
  const [similarData, setSimilarData] = useState();
  const [isloading, setLoading] = useState(true);

  ScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDatail(id);
        setDetailData(data);
        const { results: similarData } = await movieSimilar(id);
        setSimilarData(similarData);
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
          <Containal>
            <PageTitle titleName={`${detailData.title}`} />
            <ImgWrap>
              <CloseBtn>
                <Link to={routes.home}>
                  <FontAwesomeIcon icon={faXmark} />
                </Link>
              </CloseBtn>
              <MainImg $bgUrl={detailData.backdrop_path} />
              <BlackBg />
            </ImgWrap>
            <ConWrap>
              <Title>{detailData.title}</Title>
              <Con>
                <VoteAverage>
                  평점 <span>{Math.round(detailData.vote_average)}점</span>
                </VoteAverage>
                <li>|</li>
                <Runtime>{detailData.runtime}분</Runtime>
                <li>|</li>
                <ReleaseData>{detailData.release_date}</ReleaseData>
              </Con>
              <Genres>
                {detailData.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </Genres>
              <Desc>{detailData.overview.slice(0, 150) + ".."}</Desc>
              <SimalarMovie titlename="비슷한 영화" data={similarData} />
            </ConWrap>
          </Containal>
        </Wrap>
      )}
    </>
  );
};
