import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviourProps = {
  menuVisible: boolean;
};

const wrapperChanger = (menuVisible: MenuBehaviourProps['menuVisible']) => css`
  left: ${menuVisible ? '0' : '-36rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};
`;

export const Wrapper = styled.div<MenuBehaviourProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.bgMenu};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0rem;
    transition: all 400ms ease-in-out;
    overflow-y: auto;
    box-shadow: 5px 0 10px -2px ${theme.colors.black};
    scrollbar-color: ${theme.colors.secondary} ${theme.colors.primary};
    scrollbar-width: thin;
    ${wrapperChanger(menuVisible)}


    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.primary};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #B21031;
    }
  `}
`;

export const Nav = styled.nav`
    margin: auto;
    width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
    }

    img {
      border: 0.5rem solid ${theme.colors.secondary};
    }
  `}
`;

const buttonChanger = (
  menuVisible: MenuBehaviourProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${theme.colors.secondary};

  @media ((max-width: 300px)) {
    left: ${menuVisible ? '23rem' : '1rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviourProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: #082032;
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    border-radius: 4px;
    transition: all 400ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
