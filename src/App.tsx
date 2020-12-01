import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/modules/apolloClient';
import PostListPage from '@/components/PostListPage';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <PostListPage />
    </ApolloProvider>
  );
};

export default App;
