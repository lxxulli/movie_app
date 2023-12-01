import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Containal, Title, MovieBigBg, ConWrap, Num } from "./Css";

const setting = {
  spaceBetween: 90,
  slidesPerView: 4.5,

  breakpoints: {
    1024: {
      spaceBetween: 80,
      slidesPerView: 4.5,
    },
    768: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.5,
    },
  },
};

export const TopMovie = ({ titleName, data }) => {
  return (
    <Containal>
      <Title>{titleName}</Title>
      <Swiper {...setting}>
        {data.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <ConWrap>
              <Link to={`/detail/${movie.id}`}>
                <Num>{index + 1}</Num>
                <MovieBigBg $bgUrl={movie.poster_path} />
              </Link>
            </ConWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </Containal>
  );
};
