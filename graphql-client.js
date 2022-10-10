import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL || "https://squid-app-7h5w9.ondigitalocean.app/graphql",
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  cache: new InMemoryCache(),
});

export default client;
