import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  test('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Test</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
