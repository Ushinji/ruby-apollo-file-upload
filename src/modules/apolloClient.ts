import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    'X-CSRF-Token': window.csrfToken,
  },
});

export default apolloClient;
