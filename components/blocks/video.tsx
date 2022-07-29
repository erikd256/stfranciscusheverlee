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
          <iframe src={`https://youtube.com/embed/${data.videoURL}`} className="relative left-[12.5%] self-center w-3/4 h-[400px]"></iframe>
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
