import Head from 'next/head';
import { Layout } from "../components/layout";
import axios from 'axios';

export default function Sitemap() {
  var XMLResult;
    axios.get("/sitemap.xml")
   .then(function (response) {
       document.getElementById("results").innerText = response.data;
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