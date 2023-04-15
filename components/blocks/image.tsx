import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import Image from 'next/image';

export const Images = ({ data, parentField = "" }) => {
  return (
    <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full text-center`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
        <div className="w-4/6 relative pt-[10px] text-justify border-b-2 border-liturgischekleur text-xl">{data.imageTitle}</div>
        <Image src={data.fileRef} alt={data.alt} className="w-4/6 relative left-[12.5%]" />
        <div className="w-4/6 pb-[10px] text-justify border-b-2 border-liturgischekleur">{data.description}</div>
      </Container>
    </Section>
  );
};

export const imageBlockSchema: TinaTemplate = {
  name: "image",
  label: "Afbeelding",
  
  fields: [
    {
      type: "image",
      label: "Afbeelding",
      name: "fileRef",
    },
    {
      type: "string",
      label: "Afbeeldingstitel",
      name: "imageTitle",
    },
    {
      type: "string",
      label: "Alternatieve tekst",
      name: "alt",
    },
    {
      type: "string",
      label: "Beschrijving",
      name: "description",
    },
  ],
};
