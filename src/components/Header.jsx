import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, content } from '../config';

// The header container.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <svg height='220' width='239'>
      <mask id='svgmask'>
        <path
          fill='#ffffff'
          d='M217.854 119.571L119.084 218.342L20.3131 119.571C7.21537 
          106.474 -0.142881 88.7093 -0.142881 70.1862C-0.142881 51.6632 
          7.21537 33.8988 20.3131 20.801C33.4109 7.70321 51.1753 
          0.344964 69.6984 0.344964C88.2214 0.344964 105.986 7.70321 
          119.084 20.801C132.181 7.70321 149.946 0.344948 168.469 
          0.344948C186.992 0.344948 204.756 7.70321 217.854 20.801C230.952 
          33.8988 238.31 51.6632 238.31 70.1862C238.31 88.7093 230.952 
          106.474 217.854 119.571Z'
        />
      </mask>
      <image width='240' xlinkHref={facheritos} mask='url(#svgmask)'></image>
    </svg>
    <Title>{content.display_title}</Title>
  </Container>
);
