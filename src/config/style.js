import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
}
`;
