import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_URL } from "../../contents";

const Containal = styled.section`
  padding: 50px 2%;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const MovieBg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const setting = {
  spaceBetween: 20,
  slidesPerView: 5.5,

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};

export const MovieType = ({ data, TitleName }) => {
  return (
    <Containal>
      <Title>{TitleName}</Title>
      <Swiper {...setting}>
        {data.map((movie) => {
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <MovieBg $bgUrl={movie.backprop_path} />
            </Link>
          </SwiperSlide>;
        })}
      </Swiper>
    </Containal>
  );
};
