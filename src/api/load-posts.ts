import config from 'config';
import { request } from 'graphql-request';
import { GRAPHQL_QUERY } from 'graphql/queries';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';

type StringFilterInput = {
  and?: [string];
  or?: [string];
  not?: StringFilterInput;
  eq?: string;
  eqi?: string;
  ne?: string;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
  notContains?: string;
  containsi?: string;
  notContainsi?: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  null?: boolean;
  notNull?: boolean;
  in?: [string];
  notIn?: [string];
  between?: [string];
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi;
  variables?: LoadPostsVariables;
};

export type LoadPostsVariables = {
  categorySlug?: StringFilterInput;
  postSlug?: StringFilterInput;
  authorSlug?: StringFilterInput;
  tagSlug?: StringFilterInput;
  sort?: string;
  start?: number;
  limit?: number;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 2,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
