import { PostTags } from '../../components/PostTags';
import { Post } from '../../components/Post';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../../templates/Base';

import * as Styled from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  console.log(post);
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <Styled.TagsContainer>
        {post.data.map((data) => (
          <PostTags key={data.id} tags={data.attributes.tags} />
        ))}
      </Styled.TagsContainer>
    </BaseTemplate>
  );
};
