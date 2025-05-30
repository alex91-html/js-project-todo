import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', Arial, sans-serif;
    background: ${({ theme }) => theme === 'dark' ? '#181a1b' : '#fafafa'};
    color: ${({ theme }) => theme === 'dark' ? '#fafafa' : '#222'};
    font-size: 1rem;
    font-weight: 400;
    transition: background 0.2s, color 0.2s;
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
  h1, h2 {
    color: ${({ theme }) => theme === 'dark' ? '#fafafa' : '#222'};
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