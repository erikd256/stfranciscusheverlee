import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const Heading = ({ data, parentField = "" }) => {
  return (
    <Section className="bg-vijfdekleur w-full text-center">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full text-center mx-[10px] my-[0px]`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
       <span className={data.textsize}>{data.text}</span>
      </Container>
    </Section>
  );
};

export const headingBlockSchema: TinaTemplate = {
  name: "heading",
  label: "Titel",
  ui: {
    previewSrc: "/blocks/content.png",
  },
  fields: [
    {
      type: "string",
      label: "Titel",
      name: "text",
    },
    {
      type: "string",
      label: "Titel",
      name: "text",
    },
  ],
};
