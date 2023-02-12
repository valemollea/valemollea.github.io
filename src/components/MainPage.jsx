import styled from 'styled-components';
import { Header } from './Header.jsx';
import { CardGroup } from './CardGroup.jsx';

const Container = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPage = () => (
  <Container>
    <Header />
    <CardGroup />
  </Container>
);
