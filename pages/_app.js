import Header from "../components/Header";
import client from "../graphql-client";

import "../styles/globals.css";
import "../styles/code.css";

import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    {/* <div className=" md:h-screen p-3 md:overflow-hidden"> */}
      {/* <Header /> */}
      <Component {...pageProps} />
    {/* </div> */}
    </ApolloProvider>
  );
}

export default MyApp;
