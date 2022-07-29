import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Banner } from "./blocks/banner";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Image } from "./blocks/image";
import {Form} from "./blocks/form";
import { Header } from "./blocks/header";
import { Video } from "./blocks/video";

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
                case "PageBlocksHeader":
                return (
                    <Header data={block} />
                );
                case "PageBlocksImage":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Image data={block} parentField={`blocks.${i}`} />
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
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
