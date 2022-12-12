import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
  ${({ theme }) => css`
   img {
    border: 1px solid ${theme.colors.secondary};
  }
  `}
`;
