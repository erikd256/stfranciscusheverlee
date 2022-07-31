import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";


export const Video = ({ data, parentField = "" }) => {
  return (
    <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
          <div className="relative w-4/6 left-[12.5%] pt-[10px] text-justify border-b-2 border-liturgischekleur text-xl">{data.title}</div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${data.videoURL}`} className="relative left-[12.5%] self-center my-[10px] w-4/6 h-[400px]"></iframe>
          <div className="relative left-[12.5%] w-4/6 pb-[10px] text-justify border-b-2 border-liturgischekleur">{data.description}</div>
      </Container>
    </Section>
  );
};

export const videoBlockSchema: TinaTemplate = {
  name: "video",
  label: "YouTube Video",
  ui: {
    previewSrc: "/blocks/content.png",
  },
  fields: [
    {
      type: "string",
      label: "Video-ID (YouTube)",
      name: "videoURL",
    },
    {
      type: "string",
      label: "Beschrijving",
      name: "description",
    },
    {
      type: "string",
      label: "Titel",
      name: "title",
    },
  ],
};
