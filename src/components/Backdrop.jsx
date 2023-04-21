import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './../config';

// Component that obfuscates the background
// to focus on an element on the foreground (i.e. card details).
export const Backdrop = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 0.45 },
  exit: { opacity: 0 },
})`
  background-color: ${theme.color.black};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
