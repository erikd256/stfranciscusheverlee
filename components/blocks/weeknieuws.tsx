import type { TinaTemplate } from "tinacms";
import React from "react";
import {useState} from 'react';
import { Container } from "../util/container";
import { Section } from "../util/section";

export const Weeknieuws = ({ data, parentField = "" }) => {
  const [isShown, setIsShown] = useState(false);  
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <button onClick={handleClick} className="underline">{data.LinkTitle}</button>
      {isShown && (
        <>
          <div className="fixed w-3/4 h-3/4 z-[500] p-0 left-[12.5%] top-[12.5%] bg-vijfdekleur rounded-xl">
            <button onClick={handleClick} className="absolute text-vierdekleur right-[10px] h-[20px] w-[20px] top-[40px]">&#x2715;</button>
            <iframe src={`https://viewer.stfranciscus-heverlee.org/web/viewer.html?file=${data.file}`} className="w-full h-full rounded-xl m-0"></iframe>
          </div>
          <div className="opacity-90 fixed bg-basiskleur z-[499] left-[0px] w-full h-full top-[0px]"></div>
        </>
      )}
      </div>
      </>
  );
};


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
