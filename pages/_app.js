import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen p-3 overflow-hidden">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
