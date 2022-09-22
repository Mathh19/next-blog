import { Heading } from '../../components/Heading';
import Link from 'next/link';
import * as Styled from './styles';
import { ImageStrapi } from 'shared-types/strapi-image';

export type PostCardProps = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    cover: ImageStrapi;
  };
};

export const PostCard = ({ attributes }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${attributes.slug}`}>
        <a>
          <Styled.Cover
            src={attributes.cover.attributes.url}
            alt={attributes.title}
          />
        </a>
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${attributes.slug}`}>
          <a>{attributes.title}</a>
        </Link>
      </Heading>
      <Styled.Excerpt>{attributes.excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
