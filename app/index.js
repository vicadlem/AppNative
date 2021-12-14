import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigator from './navigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
