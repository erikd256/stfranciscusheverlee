import type { NextApiRequest, NextApiResponse } from "next";
import * as Curl from 'node-libcurl';
const curl = new Curl();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
      curl.setOpt('URL', req.body.photoAlbumID || "");
      curl.setOpt('FOLLOWLOCATION', true);
      const regex = /https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*/gm // the only difference is the [ at the beginning
      const regexTitle = /<title>[a-zA-Z0-9\-_ ]*/gm
      curl.on('end', function (statusCode, data, headers) {
        console.info(statusCode);
        console.info('---');
        console.info(data.length);
        console.info('---');
        console.info(this.getInfo( 'TOTAL_TIME'));
        const links = new Set(data.match(regex))
        const titleString1 = data.match(regexTitle).toString().replaceAll("<title>", "")
        const titleString2 = titleString1.replaceAll(" - Google Photos","")
        res.json({images: Array.from(links), title: titleString2, coverImage: links[0]})
        this.close()
      });

      curl.on('error', curl.close.bind(curl));
      curl.perform();
  }


