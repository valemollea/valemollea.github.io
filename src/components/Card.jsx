import styled from 'styled-components';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';


const Container = styled.div`
  background-color: ${theme.colors.primary};
  padding: 1rem;
  border-radius: 1rem;
  max-width: 10rem;

  display: flex;
  flex-direction: column;
`;

const IconImage = styled.img`
  height: 3rem;
`;

const Title = styled.h2`
  font-family: 'PTRegular';
  font-size: 1rem;
  text-align: center;
`


export const Card = (props) => (
  <Container>
    <IconImage src={ Icon[props.card.icon] } alt={ props.card.name } />
    <Title>{ props.card.title }</Title>
  </Container>
);
