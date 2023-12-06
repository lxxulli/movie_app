import { Link } from "react-router-dom";
import { Containal, Title, Con, MovieBg } from "./Css";

export const ShowMovie = ({ data, titlename }) => {
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
