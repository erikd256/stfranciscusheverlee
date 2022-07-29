import type { TinaTemplate } from "tinacms";
import React from "react";
import Head from 'next/head';

export const Header = ({ data }) => { 
  return (
    <Head>
          <title>{`${data.title} @ Sint-Franciscusparochie Heverlee`}</title>
          <meta name="keywords" content={data.pagekeywords}/>
          <meta name="description" content={data.pagedesc}/>
    </Head>
    );
};


export const headerBlockSchema: TinaTemplate = {
  name: "header",
  label: "Header",
  ui: {
    previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "string",
      label: "Paginatitel",
      name: "title",
    },
    {
      type: "string",
      label: "Pagina-omschrijving",
      name: "pagedesc",
    },
    {
      type: "string",
      label: "Pagina Kernwoorden (kommagescheiden)",
      name: "pagekeywords",
    },
  ],
};