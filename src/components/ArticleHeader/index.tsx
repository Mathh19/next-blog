import { Heading } from '../Heading';
import { Author } from 'shared-typed/author';
import { Category } from 'shared-typed/category';
import { ArticleMeta } from '../ArticleMeta/index';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: string;
  createdAt: string;
  author: Author;
  categories: Category[];
};

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
