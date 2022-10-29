import Head from 'next/head';
import { Layout } from "../components/layout";
import axios from 'axios';
import * as xmljs from "xml-js";

export default function Sitemap() {
    const result = "placeholder text"; 
    axios.get(`https://www.stfranciscus-heverlee.org/sitemap.xml`)
      .then(res => {
        const XMLresponse = res.data;
        const options = {ignoreComment: true, alwaysChildren: true};
        let result = xmljs.xml2js(XMLresponse, options);
        return result;
    })
   return (
    <Layout>
      <Head>
        <title>Sitemap @ Sint-Franciscusparochie Heverlee</title>
      </Head>
      <div className="w-3/4 left-[12.5%] relative bg-vijfdekleur text-basiskleur min-h-[20px] p-[25px]">
        <span className="text-xl">Sitemap</span>
        <br></br>
        {result}
      </div>
    </Layout>
  );
}