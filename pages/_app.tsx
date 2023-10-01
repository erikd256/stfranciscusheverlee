import "../styles.css";
import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const App = ({ Component, pageProps }) => {useEffect(() => {
  init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
}, []);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
};

export default App;
