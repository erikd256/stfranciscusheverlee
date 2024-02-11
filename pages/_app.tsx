import "../styles.css";
import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  if (process.env.NODE_ENV === "production"){
  console.log = function no_console() {};
  console.error = function no_console() {};
  console.debug = function no_console() {};
  console.assert = function no_console() {};}
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
        <script async src="/stats/script.js" data-website-id="12ecce3a-d035-4a5f-9f90-a817b1eaa0a1"></script> 
        </Head>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
};

export default App;
