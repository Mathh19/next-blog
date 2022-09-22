import { PostContainer } from '../../components/PostContainer';
import {
  ArticleHeader,
  ArticleHeaderProps,
} from '../../components/ArticleHeader';
import { HtmlContent } from '../../components/HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({ id, attributes, content }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader id={id} attributes={attributes} />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
