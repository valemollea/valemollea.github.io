import styled from 'styled-components';
import { Header } from './Header.jsx';

/**
 * The main container that:
 * - centers the content horizontally
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
