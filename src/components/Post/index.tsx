import { PostContainer } from '../../components/PostContainer';
import { ArticleHeader } from '../../components/ArticleHeader';
import { HtmlContent } from '../../components/HtmlContent';
import * as Styled from './styles';
import { ImageStrapi } from 'shared-types/strapi-image';
import { ArticleMetaProps } from 'components/ArticleMeta';

export type PostProps = {
  id: string;
  attributes: {
    title: string;
    excerpt: string;
    cover: ImageStrapi;
    content: string;
  } & ArticleMetaProps;
};

export const Post = ({ id, attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader id={id} attributes={attributes} />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={attributes.content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
