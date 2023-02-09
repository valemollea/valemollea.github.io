import styled from 'styled-components';
import { Header } from '.';

/**
 * The main container that:
 * - takes the whole height and width
 * - sets the theme colors for text and background
 * - centers the content both horizontally and vertically
 */
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0px;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPage = () => (
  <Container>
    <Header />
  </Container>
);
