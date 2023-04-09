import { ThemeProvider } from 'styled-components';
import { theme, content, GlobalStyle } from './config';
import { MainPage } from './components/MainPage.jsx';
import useMetaTags from 'react-metatags-hook';

export const App = () => {
  useMetaTags({
    title: content.meta.title,
    description: content.meta.description,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
};
