import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'

export const GalleryItem = ({ data, tinaField }) => {
  const [srcArray, setSrcArray] = React.useState([])
  const [coverImage, setCoverImage] = React.useState("")
  const [galleryHidden, setGalleryHidden] = React.useState(true)
  const [titleHidden, setTitleHidden] = React.useState(true)
  const [imageNumber, setImageNumber] = React.useState(0)
  const [galleryTitle, setGalleryTitle] = React.useState("")
  const [loadingState, setLoading] = React.useState("block");
  async function getGallery(){
    await axios({url: `/pictures/?r=${data.sharingURL}`, method: "get"}).then((result) => {
    setSrcArray(result.data.images)
    setCoverImage(result.data.coverImage)
    setGalleryTitle(result.data.title)
    setLoading("hidden")
  }).catch((error) => {
    console.error(error)
  })}

  React.useEffect(()=>{
    getGallery()
  }, [])
  function hideGallery(){
    setGalleryHidden(!galleryHidden)
  }
  function toggleTitle(){
    setTitleHidden(!titleHidden)
  }
  return (
    <div className="flex flex-col">
      <div className="p-[50px] container w-full h-[260px] relative m-[50px]"  onMouseEnter={toggleTitle} onMouseLeave={toggleTitle}>
        <div className={`w-full h-full bg-basiskleur ${loadingState}  absolute top-0 left-0 z-[2001] rounded-md text-liturgischekleur text-xl baseline-[180px]`}>
          <span className="w-full text-center absolute top-[45%] left-[35%] inline-flex leading-[60px]"><ThreeDots visible={true} height="60" width="60" color="#CB904D" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/></span>
        </div>
        <img className="absolute object-cover w-full border-4 border-basiskleur top-0 left-0 rounded-md h-full" src={coverImage} onClick={hideGallery}></img>
        <span onClick={hideGallery} className={`text-xl w-full h-full absolute top-0 left-0 z-[2000] ${titleHidden ? "hidden":"inline-block"} pt-[25%] bg-liturgischekleur text-center rounded-md border-2 border-basiskleur`}>{data.title || galleryTitle}</span>  
      </div>
      <div className={`fixed p-0 z-[5000] h-[100%] w-[100%] bg-basiskleur top-[0%] left-[0%] ${galleryHidden ? "hidden":"block" } overflow-hidden overflow-x-scroll`}>
        <span className="fixed top-[10px] text-2xl w-full text-center text-liturgischekleur"><b>{data.title || galleryTitle}</b></span>
        <span className="relative left-1/4 top-1/4 flex flex-nowrap h-full py-1/4 pr-[25px]">{srcArray.map((url) => { return <img className="inline-block border-2 border-liturgischekleur mx-[15px] h-[50%] w-fit rounded-xl" src={url}></img>})}<button className="inline-block h-1/2 text-liturgischekleur text-xl text-center pr-[50px]" onClick={hideGallery}>&#x2715; Sluiten</button></span>
      </div>
    </div>
  );
};

export const Gallery = ({ data, parentField }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-2 text-justify`}
        size="large"
      >
        <p className="w-full"><h1>{data.title}</h1></p>
        {data.items &&
          data.items.map(function (block, i) {
            return (
              <GalleryItem
                data={block}
                tinaField={`${parentField}.items.${i}`}  
                key={i}
              />
            );
          })}
      </Container>
    </Section>
  );
};

export const defaultGallery: TinaTemplate = {
  name: "GalleryItem",
  label: "Fotoalbums",
  fields: [
    {
      type: "string",
      label: "Fotoalbum URL",
      name: "sharingURL",
    },
  ],
};

export const galleryBlockSchema: TinaTemplate = {
  name: "gallery",
  label: "Fotoalbums",
  ui: {
    defaultItem: {
      items: [defaultGallery],
    },
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
          ...defaultGallery,
        },
        
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
        
      },
      fields: [
        {
          type: "string",
          label: "Fotoalbum URL",
          name: "sharingURL",
        },
        {
          type: "string",
          label: "Titel",
          name: "title",
        },
      ]
    },
  ],
};
