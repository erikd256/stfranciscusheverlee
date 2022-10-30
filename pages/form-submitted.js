import Head from 'next/head';
import { Layout } from "../components/layout";

export default function FormSubmitted() {
   return (
    <Layout className="overflow-x-hidden">
      <Head>
        <meta name="robots" content="noindex"/>
        <title>Formulier verzonden!</title>
      </Head>
      <span className='text-2xl relative mt-[40px] w-1/2 left-1/4'>Formulier verzonden!</span>
      <br></br>
      <span className='text-lg relative left-1/4 w-3/4 mb-[100px]'>We proberen je antwoorden zo snel mogelijk te verwerken.</span>
    </Layout>
  );
}