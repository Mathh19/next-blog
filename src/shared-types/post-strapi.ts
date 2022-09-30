import { Author } from './author';
import { Category } from './category';
import { ImageStrapi } from './strapi-image';
import { PostTag } from './tag';
export type PostStrapi = {
  data: {
    id: string;
    attributes: {
      slug: string;
      title: string;
      excerpt: string;
      content: string;
      cover: ImageStrapi;
      categories: Category[];
      tags: PostTag[];
      author: Author;
      createdAt: string;
      allowComments: boolean;
    };
  };
};
