import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import React, { useEffect } from "react";

import { init } from "@socialgouv/matomo-next";
const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;