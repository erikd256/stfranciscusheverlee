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
      <span className='text-lg relative left-1/4 w-1/2 mb-[20px]'>Je boodschap wordt overgedragen...</span>
      <img src='https://media2.giphy.com/media/AAn1TeM1E9WVO/giphy.gif?cid=ecf05e470bm0iv94ld9vcaneetbb5gd3qxcumi82a3efz04w&rid=giphy.gif&ct=g' className='mb-[10px] rounded-md relative left-1/4 h-auto w-1/2'></img>
      <button  className={`mb-[40px] py-[5px] relative left-1/4 rounded-[5px] border-basiskleur bg-liturgischekleur border-[2px] w-1/2`} onClick={`history.back()`}>Ga terug!</button>
    </Layout>
  );
}