import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from './index';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat,
    esse hic quos sit sint dicta quia ex magnam rem eos culpa quo,
    non alias officia labore, ratione aut nemo.`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
