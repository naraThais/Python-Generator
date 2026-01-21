"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #050505;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyles;
