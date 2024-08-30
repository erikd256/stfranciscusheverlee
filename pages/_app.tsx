import "../styles.css";
import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import axios from "axios"

import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  async function verifyCaptchaAction(token: string) {
    const res = await axios({
      method: 'post',
      url:`/api/recaptchaverification`, 
      data: {
        gRecaptchaToken: token
      } 
  })
    if (res.data > 0.5) {
      return true
    } else {
      return false
    }}
      
  async function onCheck() {
    // if the component is not mounted yet
    if (!executeRecaptcha) {
      console.error("component not yet mounted")
      return
    }
    // receive a token
    const token = await executeRecaptcha("onCheck")
    // validate the token via the server action we've created previously
    const verified = await verifyCaptchaAction(token)

    if (verified) {
      // do nothing.
    }else{
      if(!sessionStorage.getItem("bot")){
      location.replace("/recaptcha")}
      else{
        // do nothing since bot detection was cleared with recaptcha v2
      }}
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        nonce: undefined,
      }}
      >
        <Head>
        <script async src="/stats/script.js" data-website-id="bceb8dd7-4f73-4545-8bb8-74397861dce1"></script> 
        </Head>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
};

export default App;
