import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { INSTAR_URL } from "../contents";

const SFooter = styled.div`
  padding: 100px 2%;
  text-align: center;
  border-top: 1px solid white;
  margin-top: 50px;
  h4 {
    font-size: 18px;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <h4>Copyright 2023 MWUP &copy; All right reserved.</h4>
    </SFooter>
  );
};
