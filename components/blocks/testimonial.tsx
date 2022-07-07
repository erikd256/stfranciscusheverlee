import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const Testimonial = ({ data, parentField = "" }) => {
  return (
    <Section>
      <Container size="large" className="bg-liturgischekleur">
        <blockquote>
          <div
            className={`relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-bold text-center break-words text-basiskleur  `}
          >
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1 `}
            >
              &ldquo;
            </span>
            <p
              data-tinafield={`${parentField}.quote`}
              className="relative opacity-95"
            >
              {data.quote}
            </p>
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1 text-basiskleur`}
            >
              &rdquo;
            </span>
          </div>
          <div className={`my-8 flex-grow-0`}>
            <span
              className={`block mx-auto h-0.5 w-1/6 text-basiskleur`}
            ></span>
          </div>
          <footer className="text-center">
            <p
              data-tinafield={`${parentField}.author`}
              className={`tracking-wide title-font font-bold text-lg text-basiskleur`}
            >
              {data.author}
            </p>
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
};

export const testimonialBlockSchema: TinaTemplate = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
  ],
};
