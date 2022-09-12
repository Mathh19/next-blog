import { Author } from 'shared-typed/author';
import { Category } from 'shared-typed/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  console.log(author, categories);

  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.slug}`}>{author.name}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>
        <span className="categories">
          {categories.map((category) => {
            return (
              <span key={`article-meta-cat${category.id}`}>
                <a href={`/category/${category.slug}`}>{category.name}</a>
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Wrapper>
  );
};