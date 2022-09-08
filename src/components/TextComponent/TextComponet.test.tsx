import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from './index';

describe('<TextComponent />', () => {
  test('it should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  test('it should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
