import Head from 'next/head';
import { Layout } from "../components/layout";
const links = require('sitemap-links');

export default function Sitemap() {
  links('https://stfranciscus-heverlee.org/sitemap.xml')
  .then(urls => document.getElementById("results").innerText = urls);
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