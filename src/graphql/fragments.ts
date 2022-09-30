import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFileEntity {
  id
  attributes {
    alternativeText
    url
  }
}

fragment cover on Post {
  cover {
    data {
      ...image
    }
  }
}

fragment tag on TagEntity {
  id
  attributes {
    name
    slug
  }
}

fragment author on AuthorEntity {
  id
  attributes {
    name
    slug
  }
}

fragment category on CategoryEntity {
  id
  attributes {
    name
    slug
  }
}

fragment tags on Post {
  tags {
    data {
      ...tag
    }
  }
}

fragment authorPost on Post {
  author {
    data {
      ...author
    }
  }
}

fragment categories on Post {
  categories {
    data {
      ...category
    }
  }
}

fragment menuLink on ComponentMenuMenuLink {
  id
  link
  text
  newTab
}

fragment post on PostEntity {
  id
  attributes {
    slug
    title
    excerpt
    content
    createdAt
    allowComents
    ...cover
    ...categories
    ...tags
    ...authorPost
  }
}

fragment settings on SettingEntityResponse {
  data {
    id
    attributes {
      blogName
      blogDescription
      logo {
        data {
          ...image
        }
      }
      menuLink {
        ...menuLink
      }
      footer
    }
  }
}
`;
