import React from 'react';
import styled from 'styled-components';
import { Card } from './Card.jsx';
import { cards } from './../config';

// TODO: Responsive

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
`;


export const CardGroup = () => (
  <Container>
    {
      cards.map((card) => (
        <Card card={ card } />
      ))
    }
  </Container>
);
