import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Containal, Title, MovieBg } from "./Css";

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

export const MovieType = ({ data, titleName }) => {
  return (
    <Containal>
      <Title>{titleName}</Title>
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
