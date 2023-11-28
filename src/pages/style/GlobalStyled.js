import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1b1b1b",
  pointColor: "#ff3090",
};

export const maintext = {
  pointText: "'Black Han Sans', sans-serif",
};

export const GlobalStyled = createGlobalStyle`
 ${reset}

 *{
    box-sizing: border-box;
 }

 body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${mainColors.blackColor};
    color: white;
    letter-spacing: -1px;
 }

 ul, li{
    list-style: none;
 }

 a{
   text-decoration: none;
   color: white;
 }
`;
