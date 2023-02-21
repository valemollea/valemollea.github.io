import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';
import { Backdrop } from './Backdrop.jsx';

// The card details container.
// Gets displayed in the center of the screen
// and its size depends on the type of screen.
const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  background-color: ${theme.colors.primary};
  border-radius: 1rem;

  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  max-height: 60%;
  max-width: 40%;
`;

const IconImage = styled.img`
  height: 3rem;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.nerd};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0;
`;

/**
 * Card Details Component.
 * Displays `all` information of an info card.
 * Meant to be displayed when a card is selected from the grid.
 */
const RawCardDetails = ({ icon, name, title, ...props }, ref) => (
  <>
    <Backdrop />
    <Container ref={ref} {...props}>
      <IconImage src={Icon[icon]} alt={name} />
      <Title>{title}</Title>
    </Container>
  </>
);

export const CardDetails = React.forwardRef(RawCardDetails);
