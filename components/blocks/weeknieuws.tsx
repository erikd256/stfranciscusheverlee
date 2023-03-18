import type { TinaTemplate } from "tinacms";
import React from "react";
import {useState} from 'react';

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
          <div className="fixed w-full z-[5000] h-[calc(100%-70px)] p-0 top-[70px] left-0 bg-vijfdekleur">
            <button onClick={handleClick} className="absolute text-vierdekleur right-[10px] h-[20px] w-[20px] top-[40px]">&#x2715;</button>
            <iframe src={data.file} className="w-full h-full m-0"/> 
          </div>
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
