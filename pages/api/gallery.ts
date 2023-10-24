import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    const regex = /https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*/gm // the only difference is the [ at the beginning
      const regexTitle = /<title>[a-zA-Z0-9\-_ ]*/gm
      const result = await axios.get(req.body.photoAlbumID);
      const links = new Set(result.data.match(regex))
      const titleString1 = result.data.match(regexTitle).toString().replaceAll("<title>", "")
      const titleString2 = titleString1.replaceAll(" - Google Photos","")
      res.json({images: Array.from(links), title: titleString2, coverImage: Array.from(links)[0]})
  }