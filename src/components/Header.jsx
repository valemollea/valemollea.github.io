import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, strings } from '../config';

// The header container.
const Container = styled.div``;

// The header center image.
const RoundImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`;

// The container to center the header image.
const RoundImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// The header main title.
const Title = styled.h1`
  font-family: ${theme.fonts.nerd};
  font-size: clamp(1rem, 5vw, 3rem);
  padding: 1rem;
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
    <Title>{strings.display_title}</Title>
  </Container>
);
