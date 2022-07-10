import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";

export const Question = ({ data, tinaField }) => {
  return (
    <>
      <p style={{display: data.type=="checkbox" ? "none":"block"}}><label className="p-[4px] my-[15px] rounded-[0px] border-b-[2px] border-basiskleur bg-liturgischekleur">{data.questiontitle}</label></p>
      <input type={data.type} className="my-[10px] w-full border-basiskleur border-[2px]" style={{display: data.type=="textarea" ? "none":"block"}}/>
      <textarea className="my-[10px] w-full border-basiskleur border-[2px]" style={{display: data.type=="textarea" ? "block":"none"}}></textarea>
    </>
  );
};

export const Form = ({ data, parentField }) => {
  return (
    <Section>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left bg-vijfdekleur text-basiskleur items-center`}
        size="large"
      >
        <form acceptCharset="utf-8" action={`https://formspree.io/f/${data.formspreeid}`} className="relative w-full border-2 border-basiskleur place-self-center p-[15px]" method="post">
        <fieldset>
        <p className="text-2xl my-[10px]">{data.formspreetitle}</p>
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
      label: "FormulierID",
      name: "formspreeid",
    },
    {
      type: "string",
      label: "Formulier titel",
      name: "formspreetitle",
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
              value: 'Checkbox',
              label: 'checkbox',
            },
            {
              value: 'Mailaddres',
              label: 'email',
            },
            {
              value: "text",
              label: "text"
            },
            {
              value: "textarea",
              label: "textvak"
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
          label: "Placeholder",
          name: "placeholder",
        },
      ],
    },
    
  ],
};
