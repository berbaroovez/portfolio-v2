import GlobalStyles from "../util/GlobalStyles";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Layout } from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="theme-color" content="#d43e3e" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
