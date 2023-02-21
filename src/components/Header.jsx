import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, strings } from '../config';

// The header center image.
const RoundImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 10em;
  height: 10em;
`;

// The container to center the header image.
const RoundImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// The header main title.
const Title = styled.h1`
  font-family: ${theme.fonts.nerd};
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.regular_phone}) {
    font-size: 1.3rem;
  }
`;

/**
 * Header Component.
 * Displays the basic info at a glance of the purpose of the site.
 */
export const Header = () => (
  <div>
    <RoundImageContainer>
      <RoundImage src={facheritos} />
    </RoundImageContainer>
    <Title>{strings.display_title}</Title>
  </div>
);
