import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';
import props from './mock';

describe('<Header />', () => {
  test('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showDescription={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Titulo blog/i })).toHaveAttribute(
      'src',
      props.srcImg,
    );
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test('should render image only', () => {
    renderTheme(<Header {...props} showDescription={false} />);

    expect(
      screen.queryByRole('heading', { name: props.title }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Titulo blog/i })).toHaveAttribute(
      'src',
      props.srcImg,
    );
    expect(screen.queryByRole(props.description)).not.toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showDescription={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
