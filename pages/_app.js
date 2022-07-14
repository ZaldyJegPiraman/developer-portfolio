import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
