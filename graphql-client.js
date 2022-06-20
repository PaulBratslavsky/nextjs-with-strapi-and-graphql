import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.NODE_ENV, "process.env.NODE_ENV", process.env.backendAPIUrl);

const client = new ApolloClient({
  uri: process.env.backendAPIUrl || "https://squid-app-7h5w9.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
