import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './styles';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) {
    return (
      <Styled.Wrapper>
        <Styled.NoComments>
          <p>Comentários estão desativados para este post.</p>
        </Styled.NoComments>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="my-space-blog"
        config={{
          url: `https://my-space-blog.vercel.app/post/${slug}/`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
