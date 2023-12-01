import { faEllipsis, faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColors, mainText } from "./style/GlobalStyled";

const Wrap = styled.div`
  padding: 80px 2%;
  text-align: center;
  h5 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    color: #777777;
    line-height: 20px;
  }
`;
const MainTextWrap = styled.div`
  font-size: 200px;
  font-family: ${mainText.pointText};
  color: ${mainColors.pointColor};
`;
const Pacman = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;

  li {
    margin: 50px 10px;
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <Pacman>
        <li>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGhost} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
      </Pacman>
      <MainTextWrap>
        <h3>404</h3>
      </MainTextWrap>
      <h5>찾을 수 없는 페이지 입니다.</h5>
      <p>
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경 및 삭제되어 찾을 수 없습니다.
      </p>
      <Pacman>
        <li>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGhost} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
      </Pacman>
    </Wrap>
  );
};
