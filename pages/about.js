import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { Layout } from "../components/layout";
import axios from 'axios';
import gfm from 'remark-gfm';

export default function About(){
  const [readmedata, setReadmeData] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://raw.githubusercontent.com/erikd256/stfranciscusheverlee/main/README.md')
    .then(res => setReadmeData(res));
  }, [])

  return(
    <Layout>
      <Head>
        <title>Over @ Sint-Franciscusparochie Heverlee</title>
        <meta name='keywords' content='about,sintfranciscusparochie,heverlee'/>
        <meta name='description' content='De "Over ons" pagina van de Sint-Franciscusparochie Heverlee'/>
      </Head>
      <ReactMarkdown className="left-[12.5%] w-4/6 relative p-[20px] whitespace-pre-wrap" remarkPlugins={[gfm]}>{readmedata.data}</ReactMarkdown>
    </Layout>
  )
}