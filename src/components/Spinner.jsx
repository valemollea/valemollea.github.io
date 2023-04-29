import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from '../utils/Icon.js';

const Heart = styled(motion.div).attrs({
  animate: { scale: [0.5, 1, 0.5], opacity: [0.5, 0.8, 0.5] },
  transition: { repeat: Infinity, ease: 'linear', duration: 2 },
})`
  position: absolute;

  img {
    height: 2rem;
  }
`;

export const Spinner = () => {
  return (
    <Heart>
      <img src={Icon['heart']} alt='spinner' />
    </Heart>
  );
};
