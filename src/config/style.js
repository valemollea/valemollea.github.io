import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.secondary};
}
`;
