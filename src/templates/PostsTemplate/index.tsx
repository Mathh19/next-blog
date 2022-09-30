import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../../templates/Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi;
};

export const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  console.log(posts);
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
