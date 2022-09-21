import { PostTagsProps } from 'components/PostTags';
import { PostProps } from '../components/Post';
export type PostStrapi = {
  id: string;
  attributes: PostProps & {
    tags: PostTagsProps;
    slug: string;
  };
};
