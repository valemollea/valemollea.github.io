import styled from 'styled-components';
import facheritos from './../assets/images/facheritos.png';
import { theme, strings } from '../config';

const RoundImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 10em;
  height: 10em;
`;

const RoundImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.fancy};
  font-size: 4em;
`;


export const Header = () => (
  <div>
    <RoundImageContainer>
      <RoundImage src={facheritos} />
    </RoundImageContainer>
    <Title>{strings.display_title}</Title>
  </div>
);
