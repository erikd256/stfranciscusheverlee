import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";
import React, { useRef } from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const Question = ({ data, tinaField }) => {
  return (
    <>
      {data.questiontitle} <span className="text-red-500" style={{display: data.questionrequired ? "inline-block":"none"}}>*</span>
      {data.type!="textarea"&&<input type={data.type} name={data.questionid} className={`relative left-0 my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} required={data.questionrequired}/>}
      {data.type=="textarea"&&<textarea name={data.questionid} className={`my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} rows={7} required={data.questionrequired}></textarea>}
    </>
  );
};

const [captcha, setCaptcha] = React.useState(false);
function setSolved(){
  setCaptcha(!captcha);
}
export const Form = ({ data, parentField }) => {
  return (
    <Section>
      <Container
        className={`bg-vijfdekleur text-basiskleur text-lg`}
        size="large"
      >
        <p className="text-2xl my-[10px]">{data.airformTitle}</p>
        <form method="POST" action="/api/form">
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
          <p className="inline-flex"><label>Ik ga akkoord met de privacyovereenkomst.</label><input required type="checkbox" className="mx-[10px]"/><span className="text-red-500">*</span></p>          
          <HCaptcha sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY} onVerify={token => setSolved()}/>
          <span className="text-red-500 text-sm font-bold" style={{display: captcha ? "inline-block":"none"}}>Ben je toch een robot? Klik op het vak hierboven...</span>
          <button  className={`my-[10px] rounded-[5px] border-basiskleur bg-liturgischekleur border-[2px] w-full disabled:cursor-not-allowed`} type="submit" disabled={captcha}>Versturen</button>
          <span className="text-red-500 text-sm">* Verplicht veld</span>
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
      type: "string",
      label: "Email for answers",
      name: "NetlifyId",
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
