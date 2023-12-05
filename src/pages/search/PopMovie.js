import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_URL } from "../../contents";

const Containal = styled.div``;
const Title = styled.h3`
  margin: 40px 0 20px;
  font-size: 25px;
  font-weight: 600;
`;
const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  row-gap: 15px;
`;
const MovieBg = styled.div`
  height: 320px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
`;

export const PopMovie = ({ data, titlename }) => {
  return (
    <Containal>
      <Title>{titlename}</Title>
      <Con>
        {data &&
          data.map((movie) => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <MovieBg $bgUrl={movie.poster_path} />
            </Link>
          ))}
      </Con>
    </Containal>
  );
};
