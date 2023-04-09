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
  white-space: nowrap;
  overflow: hidden;
`;

// The icon of the card item.
const IconImage = styled.img`
  height: ${theme.size.medium};
`;

// The title of the card item.
const Title = styled.h2`
  text-align: center;
  font-family: ${theme.font.nerd};
  font-size: ${theme.font_size.small};
  margin-bottom: ${theme.spacing.none};
`;

/**
 * Confirmation Button component.
 * A button that people needs to tap to confirm they're coming.
 * TODO: Use constants instead of props.
 */
const RawConfirmationButton = ({ icon, name, title, ...props }, ref) => (
  <Container ref={ref} {...props}>
    <IconImage src={Icon[icon]} alt={name} />
    <Title>{title}</Title>
  </Container>
);

export const ConfirmationButton = React.forwardRef(RawConfirmationButton);
