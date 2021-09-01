import GlobalStyles from "../util/GlobalStyles";

import { Layout } from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="theme-color" content="#d43e3e" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

//  <Head>
//    <link rel="preconnect" href="https://fonts.googleapis.com" />
//    <link
//      rel="preconnect"
//      href="https://fonts.gstatic.com"
//      // crossOrigin="true"
//    />
//    <link
//      href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
//      rel="stylesheet"
//    />
//    {/* <link rel="stylesheet" href="https://use.typekit.net/yqa4abw.css" /> */}
//  </Head>;
