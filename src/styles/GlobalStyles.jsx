import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', Arial, sans-serif;
    background: #fafafa;
    color: #222;
  }
  * {
    box-sizing: border-box;
  }
`;