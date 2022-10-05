import Link from 'next/link';
import { Author } from 'shared-types/author';
import { Category } from 'shared-types/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category;
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = { data: [] },
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.data.attributes.slug}`}>
              <a>{author.data.attributes.name}</a>
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories.data.length !== 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.data.map((category) => {
                return (
                  <span key={`article-meta-cat${category.id}`}>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <a>{category.attributes.name}</a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
