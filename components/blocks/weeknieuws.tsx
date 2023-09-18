import type { TinaTemplate } from "tinacms";
import React from "react";
import {useState} from 'react';

export const Weeknieuws = ({ data, parentField = "" }) => {

    return (
      <>Eventjes geduld. hier is nog niets te zien</>
    );
  }

export const weeknieuwsBlockSchema: TinaTemplate = {
  name: "weeknieuws",
  label: "PDF",
  
  fields: [
    {
      type: "string",
      label: "Link titel",
      name: "LinkTitle",
    },
    {
      type: "image",
      label: "PDF-Bestand",
      name: "file",
    },
  ],
};
