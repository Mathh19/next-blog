import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${theme.sizes.max};
  padding-bottom: ${theme.spacings.xhuge};
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.darkText};

  ${HeadingStyles} {
    margin: 0 0 0.6rem;
  }
  `}

  img:hover {
    transition: all ease-in-out 300ms;
    filter: brightness(70%);
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;
  `}
`;
