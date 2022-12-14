import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export const Video = ({ data, parentField = "" }) => {
  return (
    <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
        <div className="relative w-4/6 left-[12.5%] pt-[10px] mb-[10px] text-justify border-b-2 border-liturgischekleur text-xl">{data.title}</div>
        <ReactPlayer cover={data.coverImage} controls width="66.66666666%" height="400px" className="relative left-[12.5%]" url={data.videoURL} />
        <div className="relative left-[12.5%] w-4/6 pb-[10px] prose-lg text-justify border-b-2 border-liturgischekleur"><TinaMarkdown content={data.videodescription} /></div>
      </Container>
    </Section>
  );
};

export const videoBlockSchema: TinaTemplate = {
  name: "video",
  label: "Video",
  
  fields: [
    {
      type: "string",
      label: "Video-URL (Vimeo, Soundcloud, YouTube, mp4 ...)",
      name: "videoURL",
    },
    {
      type: "rich-text",
      label: "Beschrijving",
      name: "videodescription",
    },
    {
      type: "image",
      label: "Cover",
      name: "coverImage",
    },
    {
      type: "string",
      label: "Titel",
      name: "title",
    },
  ],
};
