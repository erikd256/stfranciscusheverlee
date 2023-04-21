import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Cookies } from "./cookies";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";

export const Layout = ({ rawData = {}, headerData = {}, data = layoutData, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Cookies></Cookies>
        <div
          className={`min-h-screen flex flex-col`}
        >
          <Header data={data?.header} props={headerData} />
          <div className="flex-1 w-full bg-vijfdekleur flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
          />
        </div>
    </>
  );
};
