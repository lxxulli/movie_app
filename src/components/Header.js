import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { maintext } from "../pages/style/GlobalStyled";

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
  font-family: ${maintext.pointText};
  letter-spacing: 0;
  a {
    color: #00c896;
  }
`;
const Menu = styled.div`
  display: flex;
  font-size: 30px;
  li {
    margin-left: 50px;
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
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </li>
      </Menu>
    </SHeader>
  );
};
