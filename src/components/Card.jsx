import styled from 'styled-components';
import { theme } from './../config';
import icon from './../assets/icons/vinyl.svg';

const Container = styled.div`
  background-color: ${theme.colors.primary};
  padding: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Icon = styled.img`
  height: 2rem;
`;


export const Card = (props) => (
  <Container>
    <Icon src={icon} alt={"hello"} />
    <h2>{ props.title }</h2>
  </Container>
);
