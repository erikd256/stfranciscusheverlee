import type { TinaTemplate } from "tinacms";
import React from "react";
import { Helmet } from 'react-helmet'

export const Head = ({ data }) => { 
  var pageTitle = data.title + " @ Sint-Franciscusparochie Heverlee";
  return (
    <Helmet>
          <meta name="keywords" content={data.pagekeywords}/>
          <meta name="description" content={data.pagedesc}/>
          <title>{pageTitle}</title>
    </Helmet>
    );
};


export const headBlockSchema: TinaTemplate = {
  name: "head",
  label: "Head",
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
