import Head from 'next/head';
import { Layout } from "../components/layout";
import axios from 'axios';
const convert = require('xml-js');

export default function Sitemap() {
   axios.get("/sitemap.xml")
   .then(function (response) {
       var JSONresponse = convert.xml2json(response.data, {compact: true, spaces: 4});
       document.getElementById("results").innerText = JSONresponse;
   });  
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