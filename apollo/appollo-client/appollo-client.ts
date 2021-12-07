import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers = {} }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "Bearer Guest",
        "Content-Type": "application/json"
      }
    }
  });

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;