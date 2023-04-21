import { forwardRef } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './../config';
import { Backdrop } from './Backdrop.jsx';
import { CardHeader } from './Card';
import { PopUpContainer } from './PopUpContainer.jsx';

// The card details container.
// Gets displayed in the center of the screen
// and its size depends on the type of screen.
const Container = styled(PopUpContainer)`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.small};
  background-color: ${theme.color.primary.main};
  border-radius: ${theme.border_radius.small};
  align-items: center;
  justify-content: center;
`;

const CardHeaderWrapper = styled(CardHeader)`
  img {
    height: 4rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  margin-bottom: 1rem;
`;

const Description = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.25rem;
  text-align: center;
  line-height: 150%;
  font-family: ${theme.font.fancy};
  font-size: 1.1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary};

    &:hover {
      color: ${({ theme }) => theme.color.primary.dark};
    }
  }
`;

/**
 * Card Details Component.
 * Displays `all` information of an info card.
 * Meant to be displayed when a card is selected from the grid.
 */
export const CardDetails = forwardRef(
  ({ icon, name, title, description, link, onClick, ...props }, ref) => (
    <>
      <Backdrop onClick={onClick} />
      <Container ref={ref} {...props}>
        <CardHeaderWrapper
          icon={icon}
          name={name}
          title={title}
          style={{ transform: 'scale(1.5)', marginBottom: '1rem' }}
        />
        <Description>
          {description}
          {link && <a href={link.href}>{link.text}</a>}
        </Description>
      </Container>
    </>
  )
);

CardDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

CardDetails.defaultProps = {
  description: '',
  link: null,
  onClick: () => {},
};
