import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../contents";

const Containal = styled.div``;
const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin: 20px 0;
`;
const MovieBg = styled.div`
  height: 150px;
  background: url(${IMG_URL}/w200/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

export const SimalarMovie = ({ data, titlename }) => {
  return (
    <Containal>
      <Title>{titlename}</Title>
      <Con>
        {data.map((movie) => (
          <Link to={`/detail/${movie.id}`}>
            <MovieBg $bgUrl={movie.poster_path} />
          </Link>
        ))}
      </Con>
    </Containal>
  );
};
