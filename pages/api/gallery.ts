import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    const regex = /https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*/gm // the only difference is the [ at the beginning
      const regexTitle = /<title>[a-zA-Z0-9\-_ ]*/gm
      axios.get(req.body.photoAlbumID).then((r) => {
        const links = new Set(r.data.match(regex))
        const titleString1 = r.data.match(regexTitle).toString().replaceAll("<title>", "")
        const titleString2 = titleString1.replaceAll(" - Google Photos","")
        return {images: Array.from(links), title: titleString2, coverImage: links[0]}
      }).catch((error) => {
        console.log(error)
        res.end()
      });
  }