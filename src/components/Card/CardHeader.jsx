import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import { theme } from '../../config';
import { Icon } from '../../utils/Icon.js';

// The card header container.
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
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
 * Card component.
 * Displays the basic information of an info card.
 * The main purpose is to be displayed in the Card Group.
 */
export const CardHeader = ({ icon, name, title, ...props }) => (
  <Container layoutId={`${name}-card-header`} {...props}>
    <IconImage src={Icon[icon]} alt={name} />
    <Title>{title}</Title>
  </Container>
);

CardHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
