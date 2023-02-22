import React from 'react';
import styled from 'styled-components';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';

// The card item container.
const Container = styled.div`
  background-color: ${theme.color.primary};
  padding: ${theme.spacing.small};
  border-radius: ${theme.border_radius.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// The icon of the card item.
const IconImage = styled.img`
  height: ${theme.size.medium};
`;

// The title of the card item.
const Title = styled.h2`
  font-family: ${theme.font.nerd};
  font-size: clamp(0.9rem, 1.9vw, 1rem);
  text-align: center;
  margin-bottom: ${theme.spacing.none};
`;

/**
 * Card component.
 * Displays the basic information of an info card.
 * The main purpose is to be displayed in the Card Group.
 */
const RawCard = ({ icon, name, title, ...props }, ref) => (
  <Container ref={ref} {...props}>
    <IconImage src={Icon[icon]} alt={name} />
    <Title>{title}</Title>
  </Container>
);

export const Card = React.forwardRef(RawCard);
