import { defineStaticConfig } from "tinacms";
import { contentBlockSchema } from "../components/blocks/content";
import { featureBlockSchema } from "../components/blocks/features";
import { heroBlockSchema } from "../components/blocks/hero";
import { imageBlockSchema } from "../components/blocks/image";
import { testimonialBlockSchema } from "../components/blocks/testimonial";
import { bannerBlockSchema } from "../components/blocks/banner";
import { formBlockSchema } from "../components/blocks/form";
import { videoBlockSchema } from "../components/blocks/video";
import { headingBlockSchema } from "../components/blocks/heading";
import { audioBlockSchema } from "../components/blocks/audio";
import { galleryBlockSchema } from "../components/blocks/gallery";
import { DonationBoxBlockSchema } from "../components/blocks/donationbox";
const config = defineStaticConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINATOKEN!,
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  }, media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
schema: {
  collections: [
    {
      label: "Blog Posts",
      name: "post",
      path: "content/posts",
      format: "mdx",
      ui: {
        router: ({ document }) => {
          return `/post/${document._sys.filename}`;
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Samenvatting",
          name: "desc",
        },
        {
          type: "string",
          label: "Kernwoorden (kommagescheiden)",
          name: "keywords",
        },
        {
          type: "image",
          name: "heroImg",
          label: "Hero Image",
        },
        {
          type: "rich-text",
          label: "Excerpt",
          name: "excerpt",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["author"],
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: "hh:mm A",
          },
        },
        {
          type: "rich-text",
          label: "Body",
          name: "_body",
          templates: [
            {
              name: "DateTime",
              label: "Date & Time",
              inline: true,
              fields: [
                {
                  name: "format",
                  label: "Format",
                  type: "string",
                  options: ["utc", "iso", "local"],
                },
              ],
            },
            {
              name: "BlockQuote",
              label: "Block Quote",
              fields: [
                {
                  name: "children",
                  label: "Quote",
                  type: "rich-text",
                },
                {
                  name: "authorName",
                  label: "Author",
                  type: "string",
                },
              ],
            },
          ],
          isBody: true,
        },
      ],
    },
    {
      label: "Parochieblad",
      name: "weeknieuws",
      path: "content/weeknieuws",
      format: "mdx",
      fields: [
        {
          type: "image",
          label: "Bestand",
          name: "bestand",
        },
        {
          type: "datetime",
          label: "Datum",
          name: "date",
        },
      ]
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      ui: {
        global: true,
      },
      fields: [
        {
          type: "string",
          name: "collectivename",
          label: "Open Collective SLUG"
        },
        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
            {
              type: "object",
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.label };
                },
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
                {
                  type: "string",
                  label: "Type",
                  name: "type",
                  options: [
                    { label: "Link", value: "href" },
                    { label: "Popup", value: "popup" },
                  ],
                },
                {
                  label: "Links",
                  name: "children",
                  type: "object",
                  list: true,
                  fields: [
                    {
                      type: "string",
                      label: "Link",
                      name: "href",
                    },
                    {
                      type: "string",
                      label: "Label",
                      name: "label",
                    },
                  ]
                }
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Authors",
      name: "author",
      path: "content/authors",
      format: "md",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "page",
      path: "content/pages",
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          if (document._sys.filename === "about") {
            return `/about`;
          }
          return undefined;
        },
      },
      format: "md",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Paginatitel"
        },
        {
          type: "string",
          name: "desc",
          label: "Samenvatting"
        },
        {
          type: "string",
          name: "keywords",
          label: "Kernwoorden"
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          ui: {
            visualSelector: true,
          },
          templates: [
            heroBlockSchema,
            featureBlockSchema,
            formBlockSchema,
            bannerBlockSchema,
            headingBlockSchema,
            imageBlockSchema,
            videoBlockSchema,
            audioBlockSchema,
            contentBlockSchema,
            testimonialBlockSchema,
            DonationBoxBlockSchema,
            galleryBlockSchema
          ],
        },
      ],
    },
  ],
}});

export default config;
