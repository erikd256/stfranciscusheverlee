import "../styles.css";
import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
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
