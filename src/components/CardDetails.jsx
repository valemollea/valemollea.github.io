import { forwardRef } from 'react';
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

const Description = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  line-height: 1.75rem;
`;

const Link = styled.a`
  color: ${({theme}) => theme.color.secondary};
`;

/**
 * Card Details Component.
 * Displays `all` information of an info card.
 * Meant to be displayed when a card is selected from the grid.
 */
export const CardDetails = forwardRef(({ icon, name, title, description, link, onClick, ...props }, ref) => (
  <>
    <Backdrop onClick={onClick} />
    <Container ref={ref} {...props}>
      <IconImage src={Icon[icon]} alt={name} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {link && (
        <Link href={link.href}>{link.text}</Link>
      )}
    </Container>
  </>
));
