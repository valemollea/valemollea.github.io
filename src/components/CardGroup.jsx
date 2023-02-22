import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card.jsx';
import { CardDetails } from './CardDetails.jsx';
import { cards, theme } from './../config';

// Card group container.
// Displays the cards in a grid manner.
const Container = styled.div`
  display: grid;
  gap: ${theme.spacing.small};
  padding-bottom: ${theme.spacing.small};
  grid-auto-rows: minmax(max-content, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
`;

// Forwards `motion` functionality to the card.
const MotionCard = motion(Card, { forwardMotionProps: true });

// Forwards `motion` functionality to the card detail component.
const MotionCardDetails = motion(CardDetails, { forwardMotionProps: true });

/**
 * Card Group Component.
 * Displays the list of cards in a grid manner to
 * provide the user with quick info about every card.
 * Cards should be selectable to provide more info about the card.
 */
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
