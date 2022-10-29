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
     <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full`}
        size="large"
      >
      <button onClick={handleClick} className="underline">{data.LinkTitle}</button>
      {isShown && (
        <>
          <div className="fixed w-3/4 h-3/4 z-[500] p-0 left-[12.5%] top-[12.5%] bg-vijfdekleur rounded-xl">
            <button onClick={handleClick} className="absolute text-vierdekleur right-[10px] h-[20px] w-[20px] top-[40px]">&#x2715;</button>
            <iframe src={data.file} className="w-full h-full rounded-xl m-0"></iframe>
          </div>
          <div className="opacity-90 fixed bg-basiskleur z-[499] left-[0px] w-full h-full top-[0px]"></div>
        </>
      )}
      </Container>
    </Section>
    </>
  );
};


export const weeknieuwsBlockSchema: TinaTemplate = {
  name: "weeknieuws",
  label: "PDF",
  ui: {
    previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "string",
      label: "Link titel",
      name: "LinkTitle",
    },
    {
      type: "string",
      label: "Link naar PDF-Bestand",
      name: "file",
    },
  ],
};
