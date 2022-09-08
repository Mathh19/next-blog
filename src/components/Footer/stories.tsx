import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml:
      '<p><a href="https://github.com/Mathh19" target="_blank">Feito com <span class="heart">❤</span> por Matheus Freitas</a></p>',
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
