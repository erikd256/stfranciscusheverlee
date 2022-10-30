import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";

export const Question = ({ data, tinaField }) => {
  return (
    <>
      {data.questiontitle} <span className="text-red-500" style={{display: data.questionrequired ? "inline-block":"none"}}>*</span>
      <input type={data.type} name={data.questionid} className={`relative left-0 my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} required={data.type==="textarea"? false:data.questionrequired} style={{display: data.type==="textarea"? "none":"block"}}/>
      <textarea name={data.questionid} className={`my-[10px] rounded-[5px] border-basiskleur border-[2px] w-full`} rows={7} style={{display: data.type==="textarea" ? "block":"none"}} required={data.type==="textarea" ? data.questionrequired:false}></textarea>
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
        <form name={data.NetlifyId} method="POST" data-netlify="true" data-netlify-recaptcha="true">
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
          <input type="hidden" name="form-name" value={data.NetlifyId} />
          <div data-netlify-recaptcha="true"></div>
          <p className="inline-flex"><label>Ik ga akkoord met de privacyovereenkomst.</label><input required type="checkbox" className="mx-[10px]"/><span className="text-red-500">*</span></p>          
          <button type="submit" title="Versturen" placeholder="Versturen" className="p-[4px] my-[15px] rounded-[5px] border-[2px] border-basiskleur bg-liturgischekleur w-full">Versturen</button>
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
      type: "string",
      label: "Formulier Naam (kleine letters, zonder spaties)",
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
