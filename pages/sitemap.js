import Head from 'next/head';
import { Layout } from "../components/layout";

export default function Sitemap() {
   return (
    <Layout>
      <Head>
        <title>Sitemap @ Sint-Franciscusparochie Heverlee</title>
      </Head>
      <div className="w-full bg-vijfdekleur text-basiskleur min-h-[20px] p-[25px]">
        <span className="text-xl">Sitemap</span>
        <br></br>
        <span id="results"></span>
      </div>
    </Layout>
  );
}