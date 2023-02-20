import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';

const Backdrop = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 0.3 },
  exit: { opacity: 0 },
})`
  background-color: ${theme.colors.black};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  background-color: ${theme.colors.primary};

  // TODO: Add shadow
  border-style: solid;
  border-color: ${theme.colors.secondary};
  border-radius: 1rem;

  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  max-height: 60%;
  max-width: 40%;
`;

const IconImage = styled.img`
  height: 3rem;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.nerd};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0;
`;

const RawCardDetails = ({ icon, name, title, ...props }, ref) => (
  <>
    <Backdrop />
    <Container ref={ref} {...props}>
      <IconImage src={Icon[icon]} alt={name} />
      <Title>{title}</Title>
    </Container>
  </>
);

export const CardDetails = React.forwardRef(RawCardDetails);
