import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  svg.search-ok-icon,
  svg.search-cancel-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
  }

  svg.search-cancel-icon {
      color: crimson;
  }
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 32rem;
    outline: 0;
    padding: 0.5rem ${theme.spacings.small};
    color: ${theme.colors.primary};
    border: none;
    border-bottom: 2px solid ${theme.colors.darkGray};
    background-color: transparent;
    font-size: ${theme.font.sizes.small};

    &:focus {
      border-bottom: 2px solid ${theme.colors.secondary};
    }

    &:disabled {
      border-bottom: 2px solid crimson;
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
