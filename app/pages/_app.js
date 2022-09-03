import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ulysse Chopard-Guillaumot, Fullstack web developer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
