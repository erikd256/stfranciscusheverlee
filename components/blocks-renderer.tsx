import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Banner } from "./blocks/banner";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Images } from "./blocks/image";
import {Form} from "./blocks/form";
import { Video } from "./blocks/video";
import { Heading } from "./blocks/heading";
import { Audio } from "./blocks/audio";
import { Weeknieuws } from "./blocks/weeknieuws";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksContent":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksHero":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksFeatures":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Features data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTestimonial":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksForm":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Form data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksBanner":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksImage":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Images data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksVideo":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Video data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksHeading":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Heading data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksAudio":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Audio data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksWeeknieuws":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Weeknieuws data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
