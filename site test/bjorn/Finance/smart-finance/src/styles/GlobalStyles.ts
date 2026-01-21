"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000000;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export default GlobalStyles;
