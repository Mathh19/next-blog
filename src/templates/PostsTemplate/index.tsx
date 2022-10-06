import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../../templates/Base';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from 'api/load-posts';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi;
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = undefined,
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => ({ ...p, ...morePosts.posts }));
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />

      {statePosts && statePosts.data.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Sem posts' : 'Carregar próximos posts'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
