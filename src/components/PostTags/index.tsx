import Link from 'next/link';
import { PostTag } from 'shared-types/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: PostTag;
};

export const PostTags = ({ tags = { data: [] } }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      {tags.data.length !== 0 && (
        <>
          tags:
          {tags.data.map((tag) => {
            return (
              <span key={tag.id}>
                <Link href={`/tag/${tag.attributes.slug}`}>
                  <a>{tag.attributes.name}</a>
                </Link>
              </span>
            );
          })}
        </>
      )}
    </Styled.Wrapper>
  );
};
