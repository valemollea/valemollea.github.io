import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Container = styled.svg`
  path {
    fill: ${({ color }) => color};
  }
`;

export const Arrow = ({ size, color, ...props }) => (
  <Container
    width={size}
    height={size}
    color={color}
    viewBox='0 0 8 8'
    fill='none'
    {...props}
  >
    <path
      d='M5.51729 0.150981C5.42062 0.0543095 5.2895 -2.69496e-09 5.15279 0C5.01608 
      2.69496e-09 4.88496 0.0543095 4.78829 0.150981C4.69162 0.247652 4.63731 0.378767 
      4.63731 0.515481C4.63731 0.652195 4.69162 0.78331 4.78829 0.879981L6.14529 
      2.23598H0.49329C0.360499 2.24183 0.235087 2.2987 0.14319 2.39473C0.0512934 
      2.49077 0 2.61856 0 2.75148C0 2.8844 0.0512934 3.01219 0.14319 3.10823C0.235087 
      3.20426 0.360499 3.26113 0.49329 3.26698H6.14529L4.78829 4.62398C4.69162 4.72065 
      4.63731 4.85177 4.63731 4.98848C4.63731 5.12519 4.69162 5.25631 4.78829 
      5.35298C4.88496 5.44965 5.01608 5.50396 5.15279 5.50396C5.2895 5.50396 5.42062 
      5.44965 5.51729 5.35298C7.84129 3.00798 7.79129 3.12598 7.86529 2.95298C7.9173 
      2.8268 7.9173 2.68517 7.86529 2.55898C7.79229 2.37898 7.81529 2.46798 5.51729 
      0.150981Z'
    />
  </Container>
);

Arrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Arrow.defaultProps = {
  size: 8,
  color: 'white',
};
