import set from "date-fns/esm/fp/set/index.js";
import React from "react";

export const Cookies = () => {
  const [cookieAccepted, setCookieAccepted] = React.useState(false);
  React.useEffect(() => {if(window){
    if(window.sessionStorage.getItem("cookieAccepted") == "true"){
      setCookieAccepted(!cookieAccepted);
    };
  }}, []);
  function cookieAccept(){
    setCookieAccepted(!cookieAccepted);
    if(window){
      window.sessionStorage.setItem("cookieAccepted", "true");
    }
  }
  
  return(
    <>
      <div style={{display: cookieAccepted?"none":"block"}} className="fixed w-[80%] text-center left-[10%] top-[10%] bg-basiskleur p-[20px] rounded-lg text-liturgischekleur min-h-[20px] z-[5000]">
        <h1 className="px-[20px] text-vierdekleur text-xl text-justify">Jouw privacy is belangrijk!</h1>
        <div className="my-[10px] px-[20px] text-justify mb-[70px]">
          Wij vinden net zoals de <a className="underline" href="https://www.fsf.org/about/" target="_blank">fsf</a> dat jouw rechten als softwareconsument niet ingeperkt mogen worden. Vanuit die filosofie hebben we gekozen om voor jullie deze pagina opensource en trackingvrij te maken.
          <p>-</p>
          <p>Wat betekent dit?</p>
          <ul className="list-disc px-[25px]">
            <li>Wij gebruiken geen cookies of andere trackers</li>
            <li>Wij gebruiken alleen analysetools om data te verkrijgen over de stabiliteit van deze website, volledig anoniem.</li>
            <li>Wij kunnen jullie de hoogste kwaliteit leveren gebaseerd op alleen opensource en privacy-vriendelijke tools zoals bv. NextJS en TinaCMS</li>
            <li>Jullie kunnen de volledige broncode van deze website inzien in ons <a href="https://github.com/erikd256/stfranciscusheverlee" target="_blank" className="underline">repository</a></li>
          </ul>
          <button className="absolute mt-[20px] bg-vierdekleur text-basiskleur rounded-xl p-[7px] left-[2.5%] w-[95%]" onClick={cookieAccept}>Oké</button>
          </div>
      </div>
      <div style={{display: cookieAccepted?"none":"block"}} className="opacity-90 fixed bg-liturgischekleur z-[4999] left-[0px] w-full h-full top-[0px]"></div>
    </>
  ) 
}
