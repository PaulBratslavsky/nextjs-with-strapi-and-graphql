import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
