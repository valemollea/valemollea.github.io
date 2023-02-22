import React from 'react';
import styled from 'styled-components';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';
import { Backdrop } from './Backdrop.jsx';
import { PopUpContainer } from './PopUpContainer.jsx';

// The card details container.
// Gets displayed in the center of the screen
// and its size depends on the type of screen.
const Container = styled(PopUpContainer)`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.small};
  background-color: ${theme.color.primary};
  border-radius: ${theme.border_radius.small};
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  height: ${theme.size.medium};
`;

const Title = styled.h2`
  font-family: ${theme.font.nerd};
  font-size: 1rem;
  text-align: center;
  margin-bottom: ${theme.spacing.none};
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
