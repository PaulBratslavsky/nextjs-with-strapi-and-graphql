import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.NODE_ENV, "process.env.NODE_ENV", process.env.backendAPIUrl);
const client = new ApolloClient({
  uri: process.env.backendAPIUrl || "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;
