import styled from 'styled-components';
import { Header } from '.';

/**
 * The main container that:
 * - takes the whole height and width
 * - sets the theme colors for text and background
 * - centers the content both horizontally and vertically
 */
const Container = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
`;

export const MainPage = () => (
  <Container>
    <Header />
  </Container>
);
