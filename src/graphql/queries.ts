import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
  	$categorySlug: StringFilterInput
    $postSlug: StringFilterInput
    $authorSlug: StringFilterInput
    $tagSlug: StringFilterInput
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
) {
  setting {
    ...settings
  }
  posts(
      pagination: { page: $start pageSize: $limit }
      sort: $sort
      filters: {
        slug: $postSlug
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
    ) {
      data {
        ...post
      }
    }
}
`;
