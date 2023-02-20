import React from 'react';
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
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  height: 3rem;

  @media (min-width: ${theme.breakpoints.small_phone}) and
         (max-width: ${theme.breakpoints.regular_phone}) {
    height: 2rem;
  }
`;

const Title = styled.h2`
  font-family: ${theme.fonts.nerd};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0;

  @media (min-width: ${theme.breakpoints.small_phone}) and
         (max-width: ${theme.breakpoints.regular_phone}) {
    font-size: 0.6rem;
  }
`;

const RawCard = ({ icon, name, title, ...props }, ref) => (
  <Container ref={ref} {...props}>
    <IconImage src={Icon[icon]} alt={name} />
    <Title>{title}</Title>
  </Container>
);

export const Card = React.forwardRef(RawCard);
