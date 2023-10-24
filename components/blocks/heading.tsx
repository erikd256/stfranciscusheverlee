import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const Heading = ({ data, parentField = "" }) => {
  return (
    <Section className="my-[0px] bg-vijfdekleur w-full text-center">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full text-center mx-[10px] my-[0px]`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
       <span className={`${data.textsize} text-bold`}>{data.titleText}</span>
      </Container>
    </Section>
  );
};

export const headingBlockSchema: TinaTemplate = {
  name: "heading",
  label: "Titel",
  
  fields: [
    {
      type: "string",
      label: "Titel",
      name: "titleText",
    },
    {
      type: "string",
      label: "Textgrootte",
      name: "textsize",
      options: ["text-sm", "text-md", "text-lg", "text-xl", "text-2xl", "text-4xl"],
    },
  ],
};
