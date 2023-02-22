import styled from 'styled-components';
import { Header } from './Header.jsx';
import { CardGroup } from './CardGroup.jsx';

// The main page container.
const Container = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// The main page content container.
const ContentContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

/**
 * Main Page.
 * Organizes the components to be displayed in the page.
 */
export const MainPage = () => (
  <Container>
    <ContentContainer>
      <Header />
      <CardGroup />
    </ContentContainer>
  </Container>
);
