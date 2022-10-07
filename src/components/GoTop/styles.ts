import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: #082032;
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
    border-radius: 50%;
    border: 0.2rem solid ${theme.colors.secondary};
    &:hover {
      transition: 500ms ease-in-out all;
      background-color: #12324a;
      opacity: unset;
    }
  `}
`;
