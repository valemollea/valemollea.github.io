import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.font.fancy};
  color: white;
  background-color: ${({ theme }) => theme.color.primary.main};
  width: fit-content;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.border_radius.small};
  align-self: end;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.dark};
  }
`;
