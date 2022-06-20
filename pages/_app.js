import Header from "../components/Header";
import client from "../graphql-client";

import "../styles/globals.css";
import "../styles/code.css";

import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <div className="h-screen p-3 overflow-hidden">
      <Header />
      <Component {...pageProps} />
    </div>
    </ApolloProvider>
  );
}

export default MyApp;
