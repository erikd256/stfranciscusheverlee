import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";
import React from 'react';
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

export const Form = ({ data, parentField }) => {
  return (
    <Section>
      <Container
        className={`bg-vijfdekleur text-basiskleur text-lg`}
        size="large"
      >
        <p className="text-2xl my-[10px]">{data.airformTitle}</p>
        <form action={data.FormEndpoint}>
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
          <button  className={`my-[10px] rounded-[5px] border-basiskleur bg-liturgischekleur border-[2px] w-full disabled:cursor-not-allowed`} type="submit">Versturen</button>
          <span className="text-red-500 text-sm">* Verplicht veld</span>
          <input hidden type={"text"} name="sendToEmail" value={data.NetlifyId} /><br></br><br></br>
          <span className="text-sm">Dit formulier is beveiligd door reCAPTCHA en Google. Hun
          <a href="https://policies.google.com/privacy"> Privacy Policy</a> en
          <a href="https://policies.google.com/terms"> Terms of Service</a> zijn van toepassing.</span>
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
      label: "Formulier Endpoint",
      name: "FormEndpoint",
    },
    {
      type: "string",
      label: "Emailaddres voor antwoorden",
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
