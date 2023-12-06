import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { mainText } from "../pages/style/GlobalStyled";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const SHeader = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
`;
const LOGO = styled.h1`
  font-size: 40px;
  font-family: ${mainText.pointText};
  letter-spacing: 0;
  a {
    color: #00c896;
  }
  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`;
const Menu = styled.div`
  display: flex;
  font-size: 30px;
  li {
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    font-size: 20px;
    li {
      margin-left: 30px;
    }
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <LOGO>
        <Link to={routes.home}>MWUP</Link>
      </LOGO>
      <Menu>
        <li>
          <Link to={routes.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </li>
        <li>
          <Link to={routes.login}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </Menu>
    </SHeader>
  );
};
