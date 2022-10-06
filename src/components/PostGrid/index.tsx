import { ImageStrapi } from 'shared-types/strapi-image';
import { PostCard } from '../../components/PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts?: {
    data: {
      id: string;
      attributes: {
        title: string;
        slug: string;
        excerpt: string;
        cover: ImageStrapi;
      };
    }[];
  };
};

export const PostGrid = ({ posts = undefined }: PostGridProps) => {
  if (typeof posts === 'undefined' || posts.data.length === 0) {
    return (
      <Styled.Wrapper>
        <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
      </Styled.Wrapper>
    );
  }
  return (
    <Styled.Wrapper>
      <Styled.Grid>
        {posts.data.map((post) => (
          <PostCard key={`post-card-${post.id}`} data={post} />
        ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
