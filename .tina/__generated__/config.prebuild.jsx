// .tina/config.ts
import { defineStaticConfig } from "tinacms";

// components/blocks/content.tsx
import React9 from "react";

// components/util/container.tsx
import React2 from "react";

// components/util/section.tsx
import React8 from "react";

// components/layout/layout.tsx
import React6 from "react";
import Head2 from "next/head";

// components/layout/header.tsx
import Head from "next/head";
import React3 from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Fuse from "fuse.js";

// content/global/index.json
var global_default = {
  header: {
    nav: [
      {
        href: "/",
        label: "Start",
        type: "href"
      },
      {
        href: "vieringen",
        label: "Vieringen",
        type: "popup",
        children: [
          {
            href: "/familievieringen",
            label: "Familievieringen"
          },
          {
            href: "/liturgie",
            label: "Liturgie"
          },
          {
            href: "/dhj",
            label: "Doorheen het jaar"
          }
        ]
      },
      {
        href: "organisatie",
        label: "Organisatie",
        type: "popup",
        children: [
          {
            href: "/parochie",
            label: "Organisatie parochie"
          },
          {
            href: "/verenigingen",
            label: "Verenigingen"
          },
          {
            href: "parochiaalcentrum",
            label: "Parochiaal Centrum"
          },
          {
            href: "verhurenkerk",
            label: "Verhuren Kerk"
          }
        ]
      },
      {
        href: "multimedia",
        label: "Multimedia",
        type: "popup",
        children: [
          {
            href: "/fotos",
            label: "Fotoalbums"
          },
          {
            href: "/videos",
            label: "Videos"
          }
        ]
      },
      {
        href: "levensmomenten",
        label: "Levensmomenten",
        type: "popup",
        children: [
          {
            href: "/doop",
            label: "Doopsel"
          },
          {
            href: "/eerstecommunie",
            label: "Eerste communie"
          },
          {
            href: "/vormsel",
            label: "Vormsel"
          },
          {
            href: "/huwelijk",
            label: "Huwelijk"
          },
          {
            href: "/ziekenzalving",
            label: "Ziekenzalving"
          },
          {
            href: "/uitvaart",
            label: "Uitvaart"
          }
        ]
      },
      {
        href: "/kerkenleven",
        label: "Parochieblad",
        type: "href"
      },
      {
        href: "/posts",
        label: "Nieuws",
        type: "href"
      },
      {
        href: "/contact",
        label: "Contact",
        type: "href"
      },
      {
        href: "/links",
        label: "Links",
        type: "href"
      },
      {
        href: "/donaties",
        label: "Doneren",
        type: "href"
      }
    ]
  },
  footer: {
    color: "default",
    social: {
      facebook: "/",
      twitter: "/",
      instagram: "/"
    }
  },
  theme: {
    color: "yellow",
    font: "sans",
    icon: "boxicon",
    darkMode: "light"
  },
  collectivename: "stfranciscusheverlee"
};

// components/layout/cookies.tsx
import React4 from "react";

// components/layout/footer/footer.tsx
import React5 from "react";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";

// components/layout/theme.tsx
import * as React7 from "react";
var ThemeContext = React7.createContext(global_default.theme);

// components/blocks/content.tsx
import { TinaMarkdown } from "tinacms/dist/rich-text";
var contentBlockSchema = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    }
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body"
    }
  ]
};

// components/util/actions.tsx
import Link from "next/link";
import * as React10 from "react";
import { BiRightArrowAlt } from "react-icons/bi";

// components/util/icon.tsx
import * as React11 from "react";
import {
  BiCodeBlock,
  BiLike,
  BiMapAlt,
  BiPalette,
  BiPieChartAlt2,
  BiPin,
  BiShield,
  BiSlider,
  BiStore,
  BiTennisBall,
  BiTestTube,
  BiTrophy,
  BiUserCircle,
  BiBeer,
  BiChat,
  BiCloud,
  BiCoffeeTogo,
  BiWorld
} from "react-icons/bi";
import { ImTrophy } from "react-icons/im";
import {
  HiAdjustments,
  HiBeaker,
  HiChartBar,
  HiChatAlt2,
  HiCloud,
  HiColorSwatch,
  HiLocationMarker,
  HiMap,
  HiShieldCheck,
  HiShoppingCart,
  HiTerminal,
  HiThumbUp,
  HiUser
} from "react-icons/hi";
import { FiAperture } from "react-icons/fi";
import { FaBeer, FaCoffee } from "react-icons/fa";

// public/tina.svg
var tina_default = "./tina-FOVSKTU3.svg";

// components/util/icon.tsx
var iconOptions = {
  code: { bi: BiCodeBlock, hi: HiTerminal },
  like: { bi: BiLike, hi: HiThumbUp },
  map: { bi: BiMapAlt, hi: HiMap },
  palette: { bi: BiPalette, hi: HiColorSwatch },
  chart: { bi: BiPieChartAlt2, hi: HiChartBar },
  pin: { bi: BiPin, hi: HiLocationMarker },
  shield: { bi: BiShield, hi: HiShieldCheck },
  settings: { bi: BiSlider, hi: HiAdjustments },
  store: { bi: BiStore, hi: HiShoppingCart },
  ball: { bi: BiTennisBall, hi: BiTennisBall },
  tube: { bi: BiTestTube, hi: HiBeaker },
  trophy: { bi: BiTrophy, hi: ImTrophy },
  user: { bi: BiUserCircle, hi: HiUser },
  beer: { bi: BiBeer, hi: FaBeer },
  chat: { bi: BiChat, hi: HiChatAlt2 },
  cloud: { bi: BiCloud, hi: HiCloud },
  coffee: { bi: BiCoffeeTogo, hi: FaCoffee },
  world: { bi: BiWorld, hi: BiWorld },
  aperture: { bi: FiAperture, hi: FiAperture },
  tina: { bi: tina_default, hi: tina_default }
};
var iconColorClass = {
  blue: {
    regular: "text-blue-400",
    circle: "bg-blue-400 dark:bg-blue-500 text-blue-50"
  },
  teal: {
    regular: "text-teal-400",
    circle: "bg-teal-400 dark:bg-teal-500 text-teal-50"
  },
  green: {
    regular: "text-green-400",
    circle: "bg-green-400 dark:bg-green-500 text-green-50"
  },
  red: {
    regular: "text-red-400",
    circle: "bg-red-400 dark:bg-red-500 text-red-50"
  },
  pink: {
    regular: "text-pink-400",
    circle: "bg-pink-400 dark:bg-pink-500 text-pink-50"
  },
  purple: {
    regular: "text-purple-400",
    circle: "bg-purple-400 dark:bg-purple-500 text-purple-50"
  },
  orange: {
    regular: "text-orange-400",
    circle: "bg-orange-400 dark:bg-orange-500 text-orange-50"
  },
  yellow: {
    regular: "text-yellow-400",
    circle: "bg-yellow-400 dark:bg-yellow-500 text-yellow-50"
  },
  white: {
    regular: "text-white opacity-80",
    circle: "bg-white-400 dark:bg-white-500 text-white-50"
  }
};
var formatFieldLabel = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
var iconSchema = {
  type: "object",
  label: "Icon",
  name: "icon",
  fields: [
    {
      type: "string",
      label: "Color",
      name: "color",
      options: Object.keys(iconColorClass).map((color) => ({
        label: formatFieldLabel(color),
        value: color
      }))
    },
    {
      name: "style",
      label: "Style",
      type: "string",
      options: [
        {
          label: "Circle",
          value: "circle"
        },
        {
          label: "Float",
          value: "float"
        }
      ]
    },
    {
      type: "string",
      label: "Icon",
      name: "name",
      options: Object.keys(iconOptions).map((icon) => ({
        label: formatFieldLabel(icon),
        value: icon
      }))
    }
  ]
};

// components/blocks/features.tsx
import { TinaMarkdown as TinaMarkdown2 } from "tinacms/dist/rich-text";
var defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: ""
  }
};
var featureBlockSchema = {
  name: "features",
  label: "Features",
  ui: {
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature]
    }
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature
        }
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text"
        }
      ]
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" }
      ]
    }
  ]
};

// components/blocks/hero.tsx
import * as React12 from "react";
import { TinaMarkdown as TinaMarkdown3 } from "tinacms/dist/rich-text";
var heroBlockSchema = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo."
    }
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline"
    },
    {
      type: "string",
      label: "Headline",
      name: "headline"
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text"
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
          link: "/"
        }
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string"
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" }
          ]
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean"
        },
        {
          label: "Link",
          name: "link",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    }
  ]
};

// components/blocks/image.tsx
import React13 from "react";
var imageBlockSchema = {
  name: "image",
  label: "Afbeelding",
  fields: [
    {
      type: "image",
      label: "Afbeelding",
      name: "fileRef"
    },
    {
      type: "string",
      label: "Afbeeldingstitel",
      name: "imageTitle"
    },
    {
      type: "string",
      label: "Alternatieve tekst",
      name: "alt"
    },
    {
      type: "string",
      label: "Beschrijving",
      name: "description"
    }
  ]
};

// components/blocks/testimonial.tsx
import React14 from "react";
var testimonialBlockSchema = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    defaultItem: {
      quote: "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton"
    }
  },
  fields: [
    {
      type: "rich-text",
      label: "Quote",
      name: "quote"
    },
    {
      type: "string",
      label: "Author",
      name: "author"
    }
  ]
};

// components/blocks/banner.tsx
import React15 from "react";
import moment from "moment";
var bannerBlockSchema = {
  name: "banner",
  label: "Banner",
  fields: [
    {
      type: "string",
      label: "Banner URL",
      name: "bannerURL"
    },
    {
      type: "string",
      label: "Banner tekst",
      name: "bannertext"
    },
    {
      type: "datetime",
      label: "Banner vervaldatum",
      name: "vervaldatum"
    }
  ]
};

// components/blocks/form.tsx
import React16 from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios2 from "axios";
var defaultQuestion = {
  questiontitle: "Label van de vraag",
  type: "text",
  placeholder: "lorem ipsum",
  questionid: "oneword"
};
var formBlockSchema = {
  name: "form",
  label: "Formulier",
  ui: {
    defaultItem: {
      items: [defaultQuestion]
    }
  },
  fields: [
    {
      type: "string",
      label: "Formulier titel",
      name: "airformTitle"
    },
    {
      type: "string",
      label: "Formulier Endpoint",
      name: "FormEndpoint"
    },
    {
      type: "string",
      label: "Emailaddres voor antwoorden",
      name: "NetlifyId"
    },
    {
      type: "object",
      label: "Vragen",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultQuestion
        }
      },
      fields: [
        {
          type: "string",
          label: "Type",
          name: "type",
          options: [
            {
              value: "checkbox",
              label: "Checkbox"
            },
            {
              value: "email",
              label: "Mailadres"
            },
            {
              value: "text",
              label: "Text"
            },
            {
              value: "tel",
              label: "Telefoonnummer"
            },
            {
              value: "file",
              label: "Bestand"
            },
            {
              value: "textarea",
              label: "Textvak"
            }
          ]
        },
        {
          type: "string",
          label: "Label",
          name: "questiontitle"
        },
        {
          type: "boolean",
          label: "Verplichte vraag",
          name: "questionrequired"
        },
        {
          type: "string",
          label: "Vraag ID",
          name: "questionid"
        },
        {
          type: "string",
          label: "Placeholder",
          name: "placeholder"
        }
      ]
    }
  ]
};

// components/blocks/video.tsx
import React17 from "react";
import { TinaMarkdown as TinaMarkdown4 } from "tinacms/dist/rich-text";
import { default as _ReactPlayer } from "react-player/lazy";
var videoBlockSchema = {
  name: "video",
  label: "Video",
  fields: [
    {
      type: "string",
      label: "Video-URL (Vimeo, Soundcloud, YouTube, mp4 ...)",
      name: "videoURL"
    },
    {
      type: "rich-text",
      label: "Beschrijving",
      name: "videodescription"
    },
    {
      type: "image",
      label: "Cover",
      name: "coverImage"
    },
    {
      type: "string",
      label: "Titel",
      name: "title"
    }
  ]
};

// components/blocks/heading.tsx
import React18 from "react";
var headingBlockSchema = {
  name: "heading",
  label: "Titel",
  fields: [
    {
      type: "string",
      label: "Titel",
      name: "titleText"
    },
    {
      type: "string",
      label: "Textgrootte",
      name: "textsize",
      options: ["text-sm", "text-md", "text-lg", "text-xl", "text-2xl", "text-4xl"]
    }
  ]
};

// components/blocks/audio.tsx
import React19 from "react";
import { TinaMarkdown as TinaMarkdown5 } from "tinacms/dist/rich-text";
var audioBlockSchema = {
  name: "audio",
  label: "Audioplayer",
  fields: [
    {
      type: "string",
      label: "Audio URL",
      name: "audioURL"
    },
    {
      type: "rich-text",
      label: "Beschrijving",
      name: "audiodescription"
    },
    {
      type: "string",
      label: "Titel",
      name: "title"
    }
  ]
};

// components/blocks/gallery.tsx
import React20 from "react";
import axios3 from "axios";
var defaultGallery = {
  name: "GalleryItem",
  label: "Fotoalbum",
  fields: [
    {
      type: "string",
      label: "Fotoalbum URL",
      name: "sharingURL"
    }
  ]
};
var galleryBlockSchema = {
  name: "gallery",
  label: "Fotoalbums",
  ui: {
    defaultItem: {
      items: [defaultGallery]
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titel"
    },
    {
      type: "object",
      label: "Galerijen",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultGallery
        }
      },
      fields: [
        {
          type: "string",
          label: "Fotoalbum URL",
          name: "sharingURL"
        }
      ]
    }
  ]
};

// components/blocks/donationbox.tsx
import React21 from "react";
var DonationBoxBlockSchema = {
  name: "donationbox",
  label: "Donaties",
  fields: [
    {
      type: "string",
      label: "Donatie Embed code",
      name: "donationURL"
    }
  ]
};

// .tina/config.ts
var config = defineStaticConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINATOKEN,
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document: document2 }) => {
            return `/post/${document2._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title"
          },
          {
            type: "string",
            label: "Samenvatting",
            name: "desc"
          },
          {
            type: "string",
            label: "Kernwoorden (kommagescheiden)",
            name: "keywords"
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image"
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt"
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"]
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A"
            }
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
                    options: ["utc", "iso", "local"]
                  }
                ]
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text"
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string"
                  }
                ]
              }
            ],
            isBody: true
          }
        ]
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
            name: "bestand"
          },
          {
            type: "datetime",
            label: "Datum",
            name: "date"
          }
        ]
      },
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true
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
                    label: "Home"
                  }
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href"
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label"
                  },
                  {
                    type: "string",
                    label: "Type",
                    name: "type",
                    options: [
                      { label: "Link", value: "href" },
                      { label: "Popup", value: "popup" }
                    ]
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
                        name: "href"
                      },
                      {
                        type: "string",
                        label: "Label",
                        name: "label"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
            name: "name"
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar"
          }
        ]
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: ({ document: document2 }) => {
            if (document2._sys.filename === "home") {
              return `/`;
            }
            if (document2._sys.filename === "about") {
              return `/about`;
            }
            return void 0;
          }
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
              visualSelector: true
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
            ]
          }
        ]
      }
    ]
  },
  search: {
    tina: {
      indexerToken: process.env.SEARCHTOKEN,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});
var config_default = config;
export {
  config_default as default
};
