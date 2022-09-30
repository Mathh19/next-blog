import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';
import mock from './mock';
import { screen } from '@testing-library/react';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.data[0].attributes.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: props.data[0].attributes.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /^Proident sunt est enim fugiat sit incididunt sunt veniam adipisicing amet aliquip/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(
        /^Proident sunt est enim fugiat sit incididunt sunt veniam adipisicing amet aliquip/i,
      )[0],
    ).toHaveStyle({ 'font-size': '2.4rem' });
    expect(container).toMatchSnapshot();
  });
});
