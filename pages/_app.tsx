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
        <script async src="/stats/script.js" data-website-id="90de28f6-12b0-4057-8f78-c3f802bc1c16"></script> 
        </Head>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
};

export default App;
