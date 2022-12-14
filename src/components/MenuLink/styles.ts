import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: #FFFFFF;
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    transition: all ease-in-out 100ms;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
