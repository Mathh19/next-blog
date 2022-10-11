import { PostTags } from '../../components/PostTags';
import { Post } from '../../components/Post';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../../templates/Base';

import * as Styled from './styles';
import { Comments } from 'components/Comments';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings} displaySearch={true}>
      <Post {...post} />

      <Styled.TagsContainer>
        {post.data.map((data) => (
          <PostTags key={data.id} tags={data.attributes.tags} />
        ))}
      </Styled.TagsContainer>

      {post.data.map((data) => (
        <Comments
          key={data.id}
          title={data.attributes.title}
          slug={data.attributes.slug}
          id={data.id}
          allowComments={data.attributes.allowComments}
        />
      ))}
    </BaseTemplate>
  );
};
