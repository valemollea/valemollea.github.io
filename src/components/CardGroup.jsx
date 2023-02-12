import React from 'react';
import styled from 'styled-components';
import { Card } from './Card.jsx';

// TODO: Responsive

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  align-items: center;
  grid-gap: 1rem;
`;


export const CardGroup = () => (
  <Container>
    <Card title="Hello"/>
    <Card title="Hello"/>
    <Card title="Hello"/>
    <Card title="Hello"/>
  </Container>
);
