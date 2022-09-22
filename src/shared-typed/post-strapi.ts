import { PostTagsProps } from 'components/PostTags';
import { Author } from './author';
import { Category } from './category';
import { ImageStrapi } from './strapi-image';
export type PostStrapi = {
  id: string;
  attributes: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    cover: ImageStrapi;
    categories: Category[];
    tags: PostTagsProps;
    author: Author;
    createdAt: string;
    allowComments: boolean;
  };
};
