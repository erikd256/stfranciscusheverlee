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

    axios({
      method: 'get',
      url:`/api/gallery`, 
      data: {
        photoAlbumID: data.sharingURL
      } 
  }).then((result) => {
    setSrcArray(data.images)
    setGalleryTitle(data.title)
    setCoverImage(data.coverImage)
  }).catch((error) => {
    console.error(error)
  })
  
  return (
    <>
      <h1>{galleryTitle}</h1>
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
