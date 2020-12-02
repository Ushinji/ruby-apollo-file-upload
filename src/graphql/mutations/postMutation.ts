import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation createPost($displayName: String!, $image: Upload!) {
    createPost(input: { displayName: $displayName, image: $image }) {
      post {
        id
        displayName
        image
        createdAt
        updatedAt
      }
    }
  }
`;
