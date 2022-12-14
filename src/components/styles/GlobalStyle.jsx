import styled, { createGlobalStyle } from "styled-components";
import { variable } from "./Variable";


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    padding-top: 4.3rem;
    padding-bottom: 6.3rem;
    background-color: ${variable.bodyBgColor};
    color: ${variable.primaryTextColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
    font-weight: 700;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, button {
    font: inherit;
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default GlobalStyle;

export const Wrapper = styled.div`
  max-width: 134rem;
  background-color: ${variable.wrapperBgColor};
  margin: 0 auto;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 1rem;
`;
