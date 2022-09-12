import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  componet: ArticleHeader,
  args: mock,
} as Meta;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Pariatur ea Lorem consectetur minim anim pariatur proident do proident.
        Qui duis enim est eu commodo occaecat id reprehenderit est ex sunt.
        Proident quis sit tempor voluptate nostrud.
      </p>
    </div>
  );
};
