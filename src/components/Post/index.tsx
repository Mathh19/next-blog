import {
  ArticleHeader,
  ArticleHeaderProps,
} from '../../components/ArticleHeader';
import { HtmlContent } from '../../components/HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  html: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  html,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        id={id}
        author={author}
        title={title}
        categories={categories}
        cover={cover}
        excerpt={excerpt}
        createdAt={createdAt}
      />
      <HtmlContent html={html} />
    </Styled.Wrapper>
  );
};
