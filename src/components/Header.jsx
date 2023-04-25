import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, content } from '../config';

// The header container.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// The header main title.
const Title = styled.h1`
  font-family: ${theme.font.nerd};
  font-size: ${theme.font_size.large};
  padding: ${theme.spacing.small};
  text-align: center;
  margin: 0;
`;

/**
 * Header Component.
 * Displays the basic info at a glance of the purpose of the site.
 */
export const Header = () => (
  <Container>
    <svg height='220' width='240'>
      <mask id='svgmask'>
        <path
          fill='#ffffff'
          d='M218.926 119.541L120.156 218.311L21.3852 119.541C8.28745 106.443 
          0.929202 88.6788 0.929202 70.1557C0.929202 51.6327 8.28745 33.8683 
          21.3852 20.7705C34.483 7.67271 52.2474 0.314461 70.7705 0.314461C89.2935 
          0.314461 107.058 7.67271 120.156 20.7705C133.253 7.67271 151.018 0.314446 
          169.541 0.314446C188.064 0.314446 205.828 7.67271 218.926 20.7705C232.024 
          33.8683 239.382 51.6327 239.382 70.1557C239.382 88.6788 232.024 106.443 
          218.926 119.541Z'
        />
      </mask>
      <image width='236' xlinkHref={facheritos} mask='url(#svgmask)'></image>
      <path
        stroke='#ffffff'
        strokeWidth='3'
        fill='none'
        d='M217.866 118.48L120.156 216.19L22.4459 118.48C9.62942 105.664 2.42921 
        88.281 2.4292 70.1557C2.4292 52.0305 9.62941 34.6476 22.4459 21.8311C35.2624 
        9.01467 52.6452 1.81447 70.7705 1.81446C88.8957 1.81447 106.279 9.01468 
        119.095 21.8312L120.156 22.8918L121.216 21.8312C134.033 9.01468 151.416 
        1.81445 169.541 1.81445C187.666 1.81444 205.049 9.01467 217.866 21.8311C230.682 
        34.6476 237.882 52.0305 237.882 70.1557C237.882 88.2809 230.682 105.664 217.866 
        118.48Z'
      />
    </svg>
    <Title>{content.display_title}</Title>
  </Container>
);
