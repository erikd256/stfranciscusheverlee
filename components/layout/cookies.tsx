import set from "date-fns";
import React from "react";

export const Cookies = () => {
  const [cookieAccepted, setCookieAccepted] = React.useState(true);
  React.useEffect(() => {
    if(window.sessionStorage.getItem("cookieAccepted") !== "true"){
      setCookieAccepted(!cookieAccepted);
  }}, []);
  function cookieAccept(){
    setCookieAccepted(!cookieAccepted);
    if(window){
      window.sessionStorage.setItem("cookieAccepted", "true");
    }
  }
  
  return(
    <>
      <div style={{display: cookieAccepted?"none":"block"}} className="hidden fixed overflow-y-auto w-[80%] text-center left-[10%] h-[80%] top-[10%] bg-basiskleur p-[20px] rounded-[5px] text-liturgischekleur min-h-[20px] z-[5002]">
        <h1 className="px-[20px] text-vierdekleur text-xl text-justify">Jouw privacy is belangrijk!</h1>
        <div className="my-[10px] px-[20px] text-justify mb-[70px]">
          Wij vinden het net zoals de <a className="underline" href="https://www.fsf.org/about/" target="_blank">fsf</a> zeer belangrijk en respectvol naar jouw als gebruiker toe dat jouw rechten als softwareconsument niet ingeperkt mogen worden. Vanuit die filosofie hebben we gekozen om voor jullie deze pagina opensource en trackingvrij te maken.
          <p>-</p>
          <p>Wat betekent dit?</p>
          <ul className="list-disc px-[25px]">
            <li>Wij gebruiken geen cookies</li>
            <li>Om jullie gebruikerservaring constant te verbeteren gebruiken we <a href="https://umami.is/docs/faq" target="_blank">Umami</a> en <a href="https://vercel.com/docs/concepts/analytics/privacy" target="_blank">Vercel Web Vitals</a>.</li>
            <li>We verwijderen alle data na 31 dagen op onze servers</li>
            <li>Wij kunnen jullie de hoogste kwaliteit leveren gebaseerd op alleen opensource en privacy-vriendelijke tools zoals bv. NextJS en TinaCMS</li>
            <li>Jullie kunnen de volledige broncode van deze website inzien in ons <a href="https://github.com/erikd256/stfranciscusheverlee" target="_blank" className="underline">repository</a></li>
          </ul>
          <button className="absolute mt-[20px] bg-vierdekleur text-basiskleur rounded-full p-[7px] left-[2.5%] w-[95%]" onClick={cookieAccept}>Oké           <img className="h-[20px] w-[20px] inline-block ml-[10px] animate-spin duration-[5000ms]" src="/assets/cookie.png"></img></button>
          </div>
      </div>
      <div style={{display: cookieAccepted?"none":"block"}} className="hidden opacity-90 fixed bg-liturgischekleur z-[5001] left-[0px] w-full h-full top-[0px]"></div>
    </>
  ) 
}
