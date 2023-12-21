import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'

export const GalleryItem = ({ data, tinaField }) => {
  const [srcArray, setSrcArray] = React.useState([])
  const [galleryTitle, setGalleryTitle] = React.useState("")
  const [coverImage, setCoverImage] = React.useState("")
  const [galleryHidden, setGalleryHidden] = React.useState(true)
  const [titleHidden, setTitleHidden] = React.useState(true)
  const [imageNumber, setImageNumber] = React.useState(0)
  const [loadingState, setLoading] = React.useState("block");
  function getGallery(){
    axios({
      method: 'post',
      url:`/api/gallery`, 
      data: {
        photoAlbumID: data.sharingURL
      } 
  }).then((result) => {
    setSrcArray(result.data.images)
    setGalleryTitle(result.data.title)
    setCoverImage(result.data.coverImage)
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
  function increaseImageNumber(){
    if(imageNumber < (srcArray.length-1)){
      setImageNumber(imageNumber+1)
    }else{
      setImageNumber(0)
    }
  }
  function decreaseImageNumber(){
    if(imageNumber > 0){
      setImageNumber(imageNumber-1)
    }else{
      setImageNumber((srcArray.length-1))
    }
  }
  return (
    <div className="flex flex-col">
      <div className="p-[50px] container w-full h-[260px] relative m-[50px]"  onMouseEnter={toggleTitle} onMouseLeave={toggleTitle}>
        <div className={`w-full h-full bg-basiskleur ${loadingState}  absolute top-0 left-0 z-[2001] rounded-md text-liturgischekleur text-xl baseline-[180px]`}>
          <span className="w-full text-center absolute top-[45%] left-[35%] inline-flex leading-[60px]"><ThreeDots visible={true} height="60" width="60" color="#CB904D" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/></span>
        </div>
        <img className="absolute object-cover w-full border-4 border-basiskleur top-0 left-0 rounded-md h-full" src={coverImage} onClick={hideGallery}></img>
        <span onClick={hideGallery} className={`text-xl w-full h-full absolute top-0 left-0 z-[2000] ${titleHidden ? "hidden":"inline-block"} pt-[25%] bg-liturgischekleur text-center rounded-md border-2 border-basiskleur`}>{galleryTitle}</span>  
      </div>
      <div className={`fixed p-0 z-[5000] h-[50%] w-[50%] bg-basiskleur top-[10%] left-[25%] border-2 border-derdekleur rounded-md object-contain ${galleryHidden ? "hidden":"block" }`}>
        <span className="absolute top-[10px] text-lg w-full text-center text-liturgischekleur"><b>{galleryTitle}</b></span>
        <img className="mx-auto self-center relative top-[50px] max-w-full rounded-xl object-contain" src={srcArray[imageNumber]}></img>
        <span className="absolute bottom-[10px] w-full text-sm text-center text-liturgischekleur"><button onClick={decreaseImageNumber} className="text-4xl mr-4">&#9756;</button>
        <span>{imageNumber+1}/{srcArray.length}</span><button className="pt-4 text-4xl ml-4" onClick={increaseImageNumber}>&#9758;</button></span>
        <button className={`fixed rounded-md border-1 border-basiskleur p-[5px] top-[13%] left-[27%] bg-liturgischekleur ${galleryHidden ? "hidden":"block" } z-[9999]`} onClick={hideGallery}>Sluiten</button>
        
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
