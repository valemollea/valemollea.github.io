import styled from 'styled-components';
import { Header } from './Header';
import { CardGroup } from './CardGroup';
import { Confirmation } from './Confirmation';
import { theme } from '../config';

// The main page container.
const Container = styled.div`
  padding-top: ${theme.spacing.large};
  padding-bottom: ${theme.spacing.large};
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
      <Confirmation />
    </ContentContainer>
  </Container>
);
