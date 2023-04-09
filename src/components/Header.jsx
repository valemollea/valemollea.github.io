import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, content } from '../config';

// The header container.
const Container = styled.div``;

// The header center image.
const RoundImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  border-radius: ${theme.border_radius.round};
  width: ${theme.size.large};
  height: ${theme.size.large};
`;

// The container to center the header image.
const RoundImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// The header main title.
const Title = styled.h1`
  font-family: ${theme.font.nerd};
  font-size: ${theme.font_size.large};
  padding: ${theme.spacing.small};
  text-align: center;
`;

/**
 * Header Component.
 * Displays the basic info at a glance of the purpose of the site.
 */
export const Header = () => (
  <Container>
    <RoundImageContainer>
      <RoundImage src={facheritos} />
    </RoundImageContainer>
    <Title>{content.display_title}</Title>
  </Container>
);
