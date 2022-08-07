import {axios} from 'axios';
import Head from 'next/head';
import { Layout } from "../components/layout";

export default function Sitemap() {
  var XMLResult;
  async function parseSitemap(){
    axios.get("/sitemap.xml").then(
      function (response) {
        //return urls here
      }
    );
   }
   return (
    <Layout>
      <Head>
        <title>Sitemap @ Sint-Franciscusparochie Heverlee</title>
      </Head>
      <div className="w-full bg-vijfdekleur text-basiskleur min-h-[20px] p-[25px]">
        <span className="text-xl">Sitemap</span>
        <br></br>
        <button onClick={parseSitemap}>Parse Sitemap</button>
        <span></span>
      </div>
    </Layout>
  );
}