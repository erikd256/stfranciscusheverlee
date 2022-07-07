import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";

export const Question = ({ data, tinaField }) => {
  return (
    <>
      <label className="p-[4px] my-[15px] rounded-[0px] border-b-[2px] border-basiskleur bg-liturgischekleur">{data.questiontitle}</label>
      <input type={data.type} style={ data.type=="textarea" ? { display:'none'} : {display : 'block'} } placeholder={data.placeholder} className="p-[4px] my-[15px] rounded-[5px] border-[2px] border-basiskleur"/>
      <textarea style={ data.type=="textarea" ? { display:'block'} : {display : 'none'} } placeholder={data.placeholder} className="p-[4px] my-[15px] rounded-[5px] border-[2px] border-basiskleur"></textarea>
    </>
  );
};

export const Form = ({ data, parentField }) => {
  return (
    <Section>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left bg-vijfdekleur text-basiskleur`}
        size="large"
      >
        <p className="text-4xl"></p>
        <form acceptCharset="utf-8" action={`https://formspree.io/f/`} method="post">
        <fieldset>
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
          <input type="submit" title="Versturen" placeholder="Versturen" className="p-[4px] my-[15px] rounded-[5px] border-[2px] border-basiskleur bg-liturgischekleur"/>
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
          type: "string",
          label: "Placeholder",
          name: "placeholder",
        },
      ],
    },
    
  ],
};
