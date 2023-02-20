import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card.jsx';
import { CardDetails } from './CardDetails.jsx';
import { cards, theme } from './../config';

const Container = styled.div`
  padding: 1rem;
  padding-top: 0;

  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 1fr;

  @media (min-width: ${theme.breakpoints.small_phone}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.regular_phone}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MotionCard = motion(Card, { forwardMotionProps: true });
const MotionCardDetails = motion(CardDetails, { forwardMotionProps: true });

export const CardGroup = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      {cards.map((card) => (
        <MotionCard
          key={card.name}
          layoutId={card.id}
          onClick={() => setSelected(card)}
          {...card}
        />
      ))}

      <AnimatePresence>
        {selected && (
          <MotionCardDetails
            key={selected.name}
            layoutId={selected.id}
            onClick={() => setSelected(null)}
            {...selected}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};
