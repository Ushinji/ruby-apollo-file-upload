import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/modules/apolloClient';

const App: React.FC = () => {
  return <ApolloProvider client={apolloClient}>Hello World</ApolloProvider>;
};

export default App;
