import React from 'react';
import styled from 'styled-components';
import { Card } from './Card.jsx';
import { cards } from './../config';

const Container = styled.div`
  padding-bottom: 1rem;

  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardGroup = () => (
  <Container>
    {cards.map((card) => (
      <Card card={card} />
    ))}
  </Container>
);
