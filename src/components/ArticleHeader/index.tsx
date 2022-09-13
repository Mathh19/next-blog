import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta/index';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  cover,
  excerpt,
  createdAt,
  categories,
  author,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover} alt={`${title}`} />
      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
