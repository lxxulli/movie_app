import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Containal = styled.div``;
const Title = styled.div``;
const MovieBg = styled.div``;
const setting = {
  spaceBetween: 15,
  slidesPerView: 6.5,

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 6.5,
    },
    768: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.5,
    },
  },
};

export const SimalarMovie = ({ data, titlename }) => {
  console.log(data);
  return (
    <Containal>
      <Title>{titlename}</Title>
      <Swiper {...setting}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <MovieBg $bgUrl={movie.poster_path} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Containal>
  );
};
