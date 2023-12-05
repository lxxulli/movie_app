import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_URL } from "../../contents";

const Containal = styled.div``;
const Title = styled.div`
  font-size: 25px;
  margin: 20px 0;
`;
const MovieBg = styled.div`
  height: 150px;
  background: url(${IMG_URL}/w200/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
const setting = {
  spaceBetween: 5,
  slidesPerView: 5,

  breakpoints: {
    1024: {
      spaceBetween: 10,
      slidesPerView: 5,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    320: {
      spaceBetween: 5,
      slidesPerView: 3,
    },
  },
};

export const SimalarMovie = ({ data, titlename }) => {
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
