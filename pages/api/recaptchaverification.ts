import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const verifyRecaptcha = async (token:string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=6LfkyWgoAAAAABrHrP6MYOwf0zL2W754cHWqLeGZ";

  return await axios.post(verificationUrl);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
   const token = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    // Recaptcha response
    const response = await verifyRecaptcha(token);
    
    // Checking if the reponse sent by reCaptcha success or not and if the score is above 0.5
    // In ReCaptcha v3, a score sent which tells if the data sent from front end is from Human or from Bots. If score above 0.5 then it is human otherwise it is bot
    // For more info check, https://developers.google.com/recaptcha/docs/v3
    // ReCaptcha v3 response, {
    //     "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
    //     "score": number             // the score for this request (0.0 - 1.0)
    //     "action": string            // the action name for this request (important to verify)
    //     "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    //     "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
    //     "error-codes": [...]        // optional
    //   }
    if (response.data.success && response.data.score >= 0.5) {
      return res.json({
        response
      })
    } else {
      return res.json({
        status: "error",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("ERRRRROr", error);
    res.json({
      status: "error",
      message: "Something went wrong, please try again!!!",
    });
  }
}