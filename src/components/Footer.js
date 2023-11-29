import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { INSTAR_URL } from "../contents";

const SFooter = styled.div`
  padding: 100px 2%;
  text-align: center;
  border-top: 1px solid white;
  h4 {
    font-size: 18px;
  }
`;
const Instar = styled.div`
  width: 70px;
  height: 70px;
  padding: ;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  font-size: 30px;
`;

export const Footer = () => {
  return (
    <SFooter>
      <h4>Copyright 2023 MWUP &copy; All right reserved.</h4>
      <Link to={INSTAR_URL}>
        <Instar>
          <FontAwesomeIcon icon={faInstagram} />
        </Instar>
      </Link>
    </SFooter>
  );
};
