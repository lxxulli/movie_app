import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1b1b1b",
  pointColor: "#ff3090",
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
 }

 ul, li{
    list-style: none;
 }

 a{
    text-decoration: none;
    color: "white";
 }
`;
