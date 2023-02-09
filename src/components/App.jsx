import { ThemeProvider } from 'styled-components';
import { theme, strings } from './../config';
import { MainPage } from '.';
import useMetaTags from 'react-metatags-hook';


export const App = () => {
  useMetaTags({
    title: strings.meta.title,
    description: strings.meta.description
  })

  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}
