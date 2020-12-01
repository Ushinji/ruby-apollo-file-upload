import { gql } from '@apollo/client';

export const POSTS = gql`
  query {
    posts {
      id
      image
      displayName
      createdAt
      updatedAt
    }
  }
`;
