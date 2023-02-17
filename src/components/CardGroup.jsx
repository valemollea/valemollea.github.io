import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card.jsx';
import { CardDetails } from './CardDetails.jsx';
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
