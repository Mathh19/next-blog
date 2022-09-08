import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      margin: ${theme.spacings.xlarge} 0;
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

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
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
      margin: ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table td, table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
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
