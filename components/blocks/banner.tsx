import type { TinaTemplate } from "tinacms";
import React from "react";
import moment from 'moment';

export const Banner = ({ data, parentField }) => {
  const [bannerHidden, setHideBanner] = React.useState(true);
  function hideBanner(){
    setHideBanner(!bannerHidden);
  }
  const now = moment();
  function checkDate(){
    if (now.isBefore(moment(data.vervaldatum))) {
      setHideBanner(!bannerHidden);
    }}
    React.useEffect(() => {
      checkDate();
    }, []);
  return (
   <div style={{display: bannerHidden?"none":"block"}} className="bg-purple-400 fixed mo:top-[50px] z-[3999] w-[100%] h-[50px] left-[0%] top-[50px] text-white text-center"><a className="w-full underline h-full text-center leading-[50px]" href={`${data.bannerURL}?utm_campaign=banner&utm_source=banner&utm_content=${data.bannertext}`}>{data.bannertext}</a><span className="absolute right-[10px] no-underline text-white h-full leading-[50px] text-xl pr-[15px]" onClick={hideBanner}>&#x2715;</span></div>
  );
};


export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  
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
