import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ProductList from './components/ProductList';
import Product from './components/Product';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',  
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',  
  },
});



export default client;
