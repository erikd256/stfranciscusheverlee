import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
export const Audio = ({ data, parentField = "" }) => {
  console.log(data.audioURL)
  return (
    <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
          <div className="relative w-4/6 left-[12.5%] text-justify border-b-2 border-liturgischekleur text-2xl">{data.title}</div>
        <audio src={data.audioURL} preload="auto" controls controlsList="nodownload" className="relative w-4/6 left-[12.5%]"></audio>
        <div className="relative left-[12.5%] w-4/6 pb-[10px] prose-lg text-justify border-t-2 border-liturgischekleur"><TinaMarkdown content={data.audiodescription} /></div>
      </Container>
    </Section>
  );
};

export const audioBlockSchema: TinaTemplate = {
  name: "audio",
  label: "Audioplayer",
  ui: {
    previewSrc: "/blocks/content.png",
  },
  fields: [
    {
      type: "string",
      label: "Audio URL",
      name: "audioURL",
    },
    {
      type: "rich-text",
      label: "Beschrijving",
      name: "audiodescription",
    },
    {
      type: "string",
      label: "Titel",
      name: "title",
    },
  ],
};
