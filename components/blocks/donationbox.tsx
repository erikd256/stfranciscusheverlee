import Head from "next/head";
import React from "react";
import type { TinaTemplate } from "tinacms";
import { Container } from "../util/container";
import { Section } from "../util/section";
export const DonationBox = ({ data, parentField = "" }) => {
  return (
    
     <Section className="bg-vijfdekleur">
      <Container
        size="large"
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center"
      >
      <Head>
        <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      </Head>
      <iframe src={data.donationURL} name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"></iframe>
      </Container>
    </Section>
    );
};

export const donationBoxBlockSchema: TinaTemplate = {
  name: "donationbox",
  label: "Donaties",
  
  fields: [
    {
      type: "string",
      label: "Donatie URL",
      name: "donationURL",
    },
  ],
};
