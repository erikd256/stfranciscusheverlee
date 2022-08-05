import { Layout } from "../components/layout";
const xml2js = require('xml2js');
const axios = require('axios');
import Head from 'next/head';
var parseString = require('xml2js').parseString;

export default function Sitemap() {
  var XMLResult;
  async function parseSitemap(){
    axios.get("/sitemap.xml").then(
      function (response) {
        parseString(response.data, function (err, result) {
          console.log(result.urlset.url);
          const XMLResult = result.urlset.url;
          return XMLResult;
        });
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
