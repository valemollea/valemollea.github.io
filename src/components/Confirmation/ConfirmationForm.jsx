import { useState, useEffect, forwardRef, useRef } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../config';
import { Backdrop } from '../Backdrop.jsx';
import { PopUpContainer } from '../PopUpContainer.jsx';
import { Spinner } from '../Spinner.jsx';

// The card details container.
// Gets displayed in the center of the screen
// and its size depends on the type of screen.
const Container = styled(PopUpContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.primary.main};
  border-radius: ${theme.border_radius.small};
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 34rem;
  height: auto;
  max-height: calc(100% - 96px);
  margin: 3rem auto;
  padding: 2rem 1rem;

  iframe {
    background-color: transparent;
    border: none;
    overflow-x: hidden;
  }
`;

const MotionDiv = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
})``;

/**
 * Confirmation Form Component.
 * Meant to be displayed when a Confirmation Button is clicked.
 */
export const ConfirmationForm = forwardRef(({ onClick, ...props }, ref) => {
  const containerRef = useRef(ref);
  const [dimensions, setDimensions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (containerRef?.current?.offsetHeight) {
      setDimensions({
        height: containerRef?.current?.offsetHeight - 64,
        width: containerRef?.current?.offsetWidth - 32,
      });
    }
  }, [containerRef]);

  return (
    <>
      <Backdrop onClick={onClick} />
      <Container ref={containerRef} onClick={onClick} {...props}>
        {dimensions && (
          <MotionDiv>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLSfJk2XoMgDcdISrZ1LjdnG_RTccLXtLjTfVWSEs3_tCsq7JnA/viewform?embedded=true'
              width={dimensions.width}
              height={dimensions.height}
              onLoad={() => setIsLoading(false)}
            >
              Cargando…
            </iframe>
          </MotionDiv>
        )}
        {isLoading && <Spinner />}
      </Container>
    </>
  );
});

ConfirmationForm.propTypes = {
  onClick: PropTypes.func,
};

ConfirmationForm.defaultProps = {
  onClick: () => {},
};
