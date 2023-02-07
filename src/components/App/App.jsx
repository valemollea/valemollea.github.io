import { ThemeProvider } from 'styled-components';
import { theme } from './../../config';
import { MainPage } from './../MainPage';


const App = () => (
  <ThemeProvider theme={theme}>
    <MainPage />
  </ThemeProvider>
);

export default App;
