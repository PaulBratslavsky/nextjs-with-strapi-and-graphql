import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.NODE_ENV, "process.env.NODE_ENV", process.env.BACKEND_API_URL);

const client = new ApolloClient({
  uri: process.env.BACKEND_API_URL || "https://squid-app-7h5w9.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
