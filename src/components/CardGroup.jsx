import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from './Card.jsx';
import { cards } from './../config';

const Container = styled.div`
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MotionCard = motion(Card, { forwardMotionProps: true });

export const CardGroup = () => (
  <Container>
    {cards.map((card) => (
      <MotionCard
        key={card.name}
        {...card}
      />
    ))}
  </Container>
);
