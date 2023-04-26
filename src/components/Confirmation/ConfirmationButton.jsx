import { content } from '../../config';
import { Card } from '../Card/Card.jsx';
import { motion } from 'framer-motion';

/**
 * Confirmation Button component.
 * A button that people needs to tap to confirm they're coming.
 */

// Forwards `motion` functionality to the card.
const MotionCard = motion(Card, { forwardMotionProps: true });

export const ConfirmationButton = (props) => (
  <MotionCard {...content.confirmation_button} {...props} />
);
