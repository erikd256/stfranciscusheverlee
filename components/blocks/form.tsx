import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Head from "next/head";

export const Question = ({ data, tinaField }) => {
  return (
    <>
      <b>{data.questiontitle} <span className="text-red-500" style={{display: data.questionrequired ? "inline-block":"none"}}>*</span></b>
      <input type={data.type} name={data.questionid} className={`relative left-0 my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} required={data.type==="textarea" ? false:data.questionrequired} style={{display: data.type==="textarea" ? "none":"block"}}/>
      <textarea name={data.questionid} className={`my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} rows={7} style={{display: data.type==="textarea" ? "block":"none"}} required={data.type==="textarea" ? data.questionrequired:false}></textarea>
    </>
  );
};

export const Form = ({ data, parentField }) => {
  return (
    <Section>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <Container
        className={`bg-vijfdekleur text-basiskleur`}
        size="large"
      >
        <p className="text-2xl my-[10px]">{data.airformTitle}</p>
        <form name={data.airformTitle} method="POST" data-netlify="true" netlify action="/form-submitted">
        <fieldset className="text-left">
        {data.items &&
          data.items.map(function (block, i) {
            return (
              <Question
                tinaField={`${parentField}.items.${i}`}
                key={i}
                data={block}
              />
            );
          })}
          <input type="submit" title="Versturen" placeholder="Versturen" className="p-[4px] my-[15px] rounded-[5px] border-[2px] border-basiskleur bg-liturgischekleur w-full"/>
          </fieldset>
          <span className="text-red-500">* Verplicht veld</span>
          <div className="g-recaptcha" data-sitekey="6LfKUsYiAAAAAE3CN8lLY6Kv1uPGzcdTUZbzYurz"></div>
          </form>
      </Container>
    </Section>
  );
};

const defaultQuestion = {
  questiontitle: "Label van de vraag",
  type: "text",
  placeholder: "lorem ipsum",
  questionid: "oneword"
};

export const formBlockSchema: TinaTemplate = {
  name: "form",
  label: "Formulier",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultQuestion],
    },
  },
  fields: [
    {
      type: "string",
      label: "Formulier titel",
      name: "airformTitle",
    },
    {
      type: "object",
      label: "Vragen",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultQuestion,
        },
      },
      fields: [
        {
          type: "string",
          label: "Type",
          name: "type",
          options: [
            {
              value: 'checkbox',
              label: 'Checkbox',
            },
            {
              value: 'email',
              label: 'Mailadres',
            },
            {
              value: "text",
              label: "Text"
            },
            {
              value: "textarea",
              label: "Textvak"
            }
          ],
        },
        {
          type: "string",
          label: "Label",
          name: "questiontitle",
        },
        {
          type: "boolean",
          label: "Verplichte vraag",
          name: "questionrequired",
        },
        {
          type: "string",
          label: "Vraag ID",
          name: "questionid",
        },
        {
          type: "string",
          label: "Placeholder",
          name: "placeholder",
        },
      ],
    },
    
  ],
};
