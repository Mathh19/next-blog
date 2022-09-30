import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta/index';
import * as Styled from './styles';
import { ImageStrapi } from 'shared-types/strapi-image';

export type ArticleHeaderProps = {
  id: string;
  attributes: {
    title: string;
    excerpt: string;
    cover: ImageStrapi;
  } & ArticleMetaProps;
};

export const ArticleHeader = ({ attributes }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{attributes.title}</Heading>
      <Styled.Excerpt>{attributes.excerpt}</Styled.Excerpt>
      <Styled.Cover
        src={attributes.cover.data.attributes.url}
        alt={`${attributes.title}`}
      />
      <ArticleMeta
        author={attributes.author}
        categories={attributes.categories}
        createdAt={attributes.createdAt}
      />
    </Styled.Wrapper>
  );
};
