import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Containal = styled.div``;
const Title = styled.div``;
const MovieBg = styled.div``;

export const SimalarMovie = ({ titlename }) => {
  return (
    <Containal>
      <Title>{titlename}</Title>
      <Swiper>
        <SwiperSlide>
          <Link>
            <MovieBg />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Containal>
  );
};
