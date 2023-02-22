import styled from 'styled-components';
import { theme } from './../config';

// A styled container to display a pop up.
// Displays its content in a fixed manner on top of the viewport.
export const PopUpContainer = styled.div`
  position: fixed;
  inset: ${theme.spacing.none};
  margin: auto;
  max-height: ${theme.size.extraLarge};
  max-width: ${theme.size.extraLarge};
  height: 80vh;
  width: 75vw;
`;
