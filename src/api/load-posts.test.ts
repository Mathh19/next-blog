import config from '../config';
import { request } from 'graphql-request';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';
import { describe, expect, it, vi } from 'vitest';

vi.mock('graphql-request');

vi.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: { contains: 'AUTHOR' },
      tagSlug: { contains: 'TAG' },
      categorySlug: { contains: 'CATEGORY' },
      limit: 100,
      postSearch: { contains: 'SEARCH' },
      postSlug: { contains: 'SLUG' },
      sort: 'SORT',
      start: 1,
    });
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: { contains: 'AUTHOR' },
      tagSlug: { contains: 'TAG' },
      categorySlug: { contains: 'CATEGORY' },
      limit: 100,
      postSearch: { contains: 'SEARCH' },
      postSlug: { contains: 'SLUG' },
      sort: 'SORT',
      start: 1,
    });
  });
});
