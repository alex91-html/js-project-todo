import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', Arial, sans-serif;
    background: #fafafa;
    color: #222;
    font-size: 1rem;
    font-weight: 400;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 0;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

    button {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
  }



`;