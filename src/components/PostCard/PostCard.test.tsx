import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: mock.data.attributes.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: mock.data.attributes.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(mock.data.attributes.excerpt)).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: mock.data.attributes.title })[0],
    ).toHaveAttribute('href', `/post/${mock.data.attributes.slug}`);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
