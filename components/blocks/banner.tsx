import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";
import React from "react";
import moment from 'moment';
import useEffect from "react";

export const Banner = ({ data, parentField }) => {
  const [bannerHidden, setHideBanner] = React.useState(false);
  function hideBanner(){
    setHideBanner(!bannerHidden);
  }
  const now = moment();
  function checkDate(){
    if (now.isAfter(moment(data.vervaldatum))) {
      setHideBanner(!bannerHidden);
    }}
    React.useEffect(() => {
      checkDate();
    }, []);
  return (
   <div style={{display: bannerHidden?"none":"block"}} className="bg-teal-400 rounded-t-full fixed bottom-[0px] z-[3999] w-full h-[50px] text-black text-center"><a className="w-full underline h-full text-center pl-[100px] leading-[50px]" href={data.bannerURL}>{data.bannertext}</a><a className="absolute right-[50px] text-black h-full leading-[50px] text-xl pr-[15px]" onClick={hideBanner}>&#x2715;</a></div>
  );
};


export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  ui: {
    previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "string",
      label: "Banner URL",
      name: "bannerURL",
    },
    {
      type: "string",
      label: "Banner tekst",
      name: "bannertext",
    },
    {
      type: "datetime",
      label: "Banner vervaldatum",
      name: "vervaldatum",
    },
  ],
};
