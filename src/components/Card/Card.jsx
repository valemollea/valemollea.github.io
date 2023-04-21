import { forwardRef } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { CardHeader } from './CardHeader';
import { theme } from '../../config';

// The card item container.
const Container = styled.div`
  background-color: ${theme.color.primary.main};
  padding: ${theme.spacing.small};
  border-radius: ${theme.border_radius.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  box-shadow: '0 0 16px 1px rgba(0,0,0,0.25), 0 2px 4px 0 rgba(0,0,0,0.1)';
`;

/**
 * Card component.
 * Displays the basic information of an info card.
 * The main purpose is to be displayed in the Card Group.
 */
export const Card = forwardRef(({ icon, name, title, ...props }, ref) => (
  <Container ref={ref} {...props}>
    <CardHeader icon={icon} name={name} title={title} />
  </Container>
));

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
