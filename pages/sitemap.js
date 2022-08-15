import Head from 'next/head';
import { Layout } from "../components/layout";
import GetSitemapLinks from "get-sitemap-links";

export default function Sitemap() {
  (async () => {
    const array = await GetSitemapLinks(
      "https://www.stfranciscus-heverlee.org/sitemap.xml"
    );
  })();
   return (
    <Layout>
      <Head>
        <title>Sitemap @ Sint-Franciscusparochie Heverlee</title>
      </Head>
      <div className="w-3/4 left-[12.5%] relative bg-vijfdekleur text-basiskleur min-h-[20px] p-[25px]">
        <span className="text-xl">Sitemap</span>
        <br></br>
      </div>
    </Layout>
  );
}