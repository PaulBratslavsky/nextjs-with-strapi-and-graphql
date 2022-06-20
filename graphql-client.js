import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL || "https://squid-app-7h5w9.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
