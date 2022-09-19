import { Heading } from '../../components/Heading';
import Link from 'next/link';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover: string;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover} alt={title} />
        </a>
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
