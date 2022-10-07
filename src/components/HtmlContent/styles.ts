import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    line-height: 1.5;

    p {
      margin: ${theme.spacings.medium} 0;
    }

    a {
      color: ${theme.colors.secondary};
    }

    a:visited,
    a:link {
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background-color: #2C394B;
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: #B2C8DF;
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      font-size: ${theme.font.sizes.small};
      overflow-x: auto;
    }

    pre code {
      background: inherit;
      color: inherit;
    }

    code {
      font-family: monospace;
      color: #B2C8DF;
      font-size: ${theme.font.sizes.small};
      background: #2C394B;
      padding: 0.2rem;
      margin: 0.2rem;
      border-radius: 5px;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      color: #000000;
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacings.medium};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: ${theme.spacings.medium} 0;
    }

    table td, table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
      float: none;
      max-width: 100%;
      margin: 0;
    }
    }

  `}
`;
