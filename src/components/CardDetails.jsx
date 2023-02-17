import React from 'react';
import styled from 'styled-components';
import { theme } from './../config';
import { Icon } from './../utils/Icon.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  background-color: ${theme.colors.primary};

  border-style: solid;
  border-color: ${theme.colors.secondary};
  border-radius: 1rem;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  align-items: center;
  justify-content: center;

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
  <Container ref={ref} {...props}>
    <IconImage src={Icon[icon]} alt={name} />
    <Title>{title}</Title>
  </Container>
);

export const CardDetails = React.forwardRef(RawCardDetails);
