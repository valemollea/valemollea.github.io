import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.fancy};
  color: white;
  background-color: ${({ theme }) => theme.color.primary.main};
  box-shadow: 0px 0px 7px -3px rgba(148, 148, 148, 1);
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
