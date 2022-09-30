import { Heading } from '../../components/Heading';
import Link from 'next/link';
import * as Styled from './styles';
import { ImageStrapi } from 'shared-types/strapi-image';

export type PostCardProps = {
  data: {
    id: string;
    attributes: {
      title: string;
      slug: string;
      excerpt: string;
      cover: ImageStrapi;
    };
  };
};

export const PostCard = ({ data }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${data.attributes.slug}`}>
        <a>
          <Styled.Cover
            src={data.attributes.cover.data.attributes.url}
            alt={data.attributes.title}
          />
        </a>
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${data.attributes.slug}`}>
          <a>{data.attributes.title}</a>
        </Link>
      </Heading>
      <Styled.Excerpt>{data.attributes.excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
