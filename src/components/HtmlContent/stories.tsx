import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from './index';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat,
    esse hic quos sit sint dicta quia ex magnam rem eos culpa quo,
    non alias officia labore, ratione aut nemo.`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
