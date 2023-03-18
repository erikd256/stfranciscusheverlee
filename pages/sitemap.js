import Head from 'next/head';
import { Layout } from "../components/layout";
import axios from 'axios';
import React from 'react';

export default function Sitemap() {
    const [result,setResult] = React.useState([]); 
    axios.get(`/api/search/index.json`)
      .then(res => {
        setResult(res.data)
    })
   return (
    <Layout>
      <Head>
        <title>Sitemap @ Sint-Franciscusparochie Heverlee</title>
      </Head>
      <div className="w-3/4 left-[12.5%] relative bg-vijfdekleur text-basiskleur min-h-[20px] p-[25px]">
        <span className="text-xl">Sitemap</span>
        <br></br>
        {result.map(element => {
          return (<><a href={element.filename}>{element.title} ({element.filename})</a><br></br></>)
        })}
      </div>
    </Layout>
  );
}