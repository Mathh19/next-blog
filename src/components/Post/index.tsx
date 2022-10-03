import { PostContainer } from '../../components/PostContainer';
import { ArticleHeader } from '../../components/ArticleHeader';
import { HtmlContent } from '../../components/HtmlContent';
import * as Styled from './styles';
import { ImageStrapi } from 'shared-types/strapi-image';
import { ArticleMetaProps } from 'components/ArticleMeta';
import { PostTag } from 'shared-types/tag';

export type PostProps = {
  data: {
    id: string;
    attributes: {
      title: string;
      excerpt: string;
      cover: ImageStrapi;
      content: string;
      tags: PostTag;
      slug: string;
      allowComments: boolean;
    } & ArticleMetaProps;
  }[];
};

export const Post = ({ data }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        {data.map((post) => (
          <ArticleHeader
            key={post.id}
            id={post.id}
            attributes={post.attributes}
          />
        ))}
      </PostContainer>
      <PostContainer size="content">
        {data.map((post) => (
          <HtmlContent key={post.id} html={post.attributes.content} />
        ))}
      </PostContainer>
    </Styled.Wrapper>
  );
};
