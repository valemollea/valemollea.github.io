import { ThemeProvider } from 'styled-components';
import { theme } from './../config';
import { MainPage } from '.';


export const App = () => (
  <ThemeProvider theme={theme}>
    <MainPage />
  </ThemeProvider>
);
