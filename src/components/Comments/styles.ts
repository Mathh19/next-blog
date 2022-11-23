import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.large};
  `}
`;

export const NoComments = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
  `}
`;
