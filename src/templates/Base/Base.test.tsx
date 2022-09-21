import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';

import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render base elements of page', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(
      screen.getByRole('img', {
        name: "Test blog - A blog test then Idon't know what describe, it is random words just test",
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('Open or Close menu')).toBeInTheDocument();
    expect(screen.getByText('O texto da footer')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
