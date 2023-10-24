import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import axios from "axios"

export const Gallery = ({ data, parentField = "" }) => {
  const [srcArray, setSrcArray] = React.useState([])
  const [galleryTitle, setGalleryTitle] = React.useState("")
  const [coverImage, setCoverImage] = React.useState("")
  const [galleryHidden, setGalleryHidden] = React.useState(true)
  const [titleHidden, setTitleHidden] = React.useState(true)
  const [imageSrc, setImageSrc] = React.useState("")
  const [imageNumber, setImageNumber] = React.useState(0)

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
  }).catch((error) => {
    console.error(error)
  })}

  React.useEffect(()=>{
    getGallery()
  })
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
    <>
      <div className="p-[50px] container w-1/4 h-[260px] relative m-[50px]" onMouseEnter={toggleTitle} onMouseLeave={toggleTitle}>
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
    </>
  );
};

export const galleryBlockSchema: TinaTemplate = {
  name: "gallery",
  label: "Google Photos",
  
  fields: [
    {
      type: "string",
      label: "Fotoalbum URL",
      name: "sharingURL",
    },
  ],
};
