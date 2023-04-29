import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.nerd};
    background: ${({ theme }) => theme.color.background};
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 768px) { 
      height: 100%;
    }
  }
`;
