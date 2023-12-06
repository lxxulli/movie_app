import styled from "styled-components";

const SFooter = styled.div`
  padding: 100px 2%;
  text-align: center;
  border-top: 1px solid white;
  h4 {
    font-size: 18px;
  }
  @media screen and (max-width: 375px) {
    padding: 70px 2%;
    h4 {
      font-size: 16px;
    }
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <h4>&copy; 2023 MWUP All right reserved.</h4>
    </SFooter>
  );
};
