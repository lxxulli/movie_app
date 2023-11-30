import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export const TopMovie = ({ titleName }) => {
  return (
    <Containal>
      <Title>{titleName}</Title>
      <Swiper>
        {DataTransfer.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <Num />
              <MovieBg />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Containal>
  );
};
