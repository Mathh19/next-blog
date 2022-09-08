import { screen } from '@testing-library/react';
import { MenuLink } from './index';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  test('it should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  test('it should render a internal link', () => {
    renderTheme(<MenuLink link="http//localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  test('it should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  test('it should open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-bottom: 1.6rem;
        font-size: 1.8rem;
        -webkit-transition: all ease-in-out 300ms;
        transition: all ease-in-out 300ms;
      }

      .c0:hover {
        border-right: 0.5rem solid #dc143c;
        color: #dc143c;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
