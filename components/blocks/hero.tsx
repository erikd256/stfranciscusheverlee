import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Hero = ({ data, parentField }) => {
  const theme = useTheme();

  return (
    <Section className="bg-vijfdekleur">
      <Container
        size="large"
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center"
      >
        <div className="row-start-1 lg:row-start-2 lg:col-start-1 lg:col-end-3 text-center lg:text-left">
          
          {data.headline && (
            <h3
              data-tinafield={`${parentField}.headline`}
              className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font text-basiskleur`}
            >
              <span
                className={`bg-clip-text text-basiskleur`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.tagline && (
            <h2
              data-tinafield={`${parentField}.tagline`}
              className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font text-sm z-20"
            >
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-md -z-1 bg-current opacity-7"></span>
            </h2>
          )}
          {data.text && (
            <div
              data-tinafield={`${parentField}.text`}
              className={`text-basiskleur prose-lg mx-auto lg:mx-0 mb-10 md:text-justify`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          {data.actions && (
            <Actions
              parentField={`${parentField}.actions`}
              className="justify-center lg:justify-start py-2"
              actions={data.actions}
            />
          )}
        </div>
        {data.image && (
          <div
            data-tinafield={`${parentField}.image`}
            className="row-start-2 flex justify-center"
          >
            <img
              className="max-w-full"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
