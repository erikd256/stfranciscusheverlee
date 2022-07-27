import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Content = ({ data, parentField = "" }) => {
  return (
    <Section className="bg-vijfdekleur w-full">
      <Container
        className={`prose-lg text-basiskleur bg-vijfdekleur w-full`}
        data-tinafield={`${parentField}.body`}
        size="large"
      >
        <TinaMarkdown content={data.body} />
      </Container>
    </Section>
  );
};

export const contentBlockSchema: TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
  ],
};
