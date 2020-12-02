import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const apolloClient = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: '/graphql',
    headers: {
      'X-CSRF-Token': window.csrfToken,
    },
  }),
});

export default apolloClient;
