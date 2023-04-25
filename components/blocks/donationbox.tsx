import Head from "next/head";
import React from "react";
import type { TinaTemplate } from "tinacms";
import { Container } from "../util/container";
import { Section } from "../util/section"

export const Donationbox = ({ data, parentField = "" }) => {
  return (
     <Section className="bg-vijfdekleur">
      <Container
        size="large"
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center"
      >
      <Head>
      <div dangerouslySetInnerHTML={{ __html:"<script src='https://donorbox.org/widget.js' paypalExpress='false'></script>"}} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html:data.donationURL}} />
      </Container>
    </Section>
    );
};

export const DonationBoxBlockSchema: TinaTemplate = {
  name: "donationbox",
  label: "Donaties",
  fields: [
    {
      type: "string",
      label: "Donatie Embed code",
      name: "donationURL",
    },
  ],
};
