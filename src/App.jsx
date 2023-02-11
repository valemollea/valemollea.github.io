import { ThemeProvider } from 'styled-components';
import { theme, strings, GlobalStyle } from './config';
import { MainPage } from './components/MainPage.jsx';
import useMetaTags from 'react-metatags-hook';


export const App = () => {
  useMetaTags({
    title: strings.meta.title,
    description: strings.meta.description
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}
