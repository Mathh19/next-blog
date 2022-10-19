import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from './index';

describe('<HtmlContent />', () => {
  test('it should render a markdown', () => {
    renderTheme(<HtmlContent html="### Children" />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  test('it should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html="### Children" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
