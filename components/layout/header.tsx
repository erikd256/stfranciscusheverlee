import Head from "next/head";
import React from "react";

export const Header = ({ data, props }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";
  const [popup1, setPopup1] = React.useState(false);
  const [popup2, setPopup2] = React.useState(false);
  const [popup3, setPopup3] = React.useState(false);
  const [popup4, setPopup4] = React.useState(false);
  const [menuExpanded, setMenuExpanded] = React.useState(false);
  function toggle1(){
    setPopup1(!popup1);
    setPopup2(false);
    setPopup3(false);
    setPopup4(false);
  }
  function toggle2(){
    setPopup1(false);
    setPopup2(!popup2);
    setPopup3(false);
    setPopup4(false);
  }
  function toggle3(){
    setPopup1(false);
    setPopup2(false);
    setPopup3(!popup3);
    setPopup4(false);
  }
  function toggle4(){
    setPopup1(false);
    setPopup2(false);
    setPopup3(false);
    setPopup4(!popup4);
  }
  function menuExpand(){
    setMenuExpanded(!menuExpanded);
  }
  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>{props.title} @ Sint-Franciscusparochie</title>
        <meta name="description" content={props.desc}/>
        <meta name="keywords" content={props.keywords}/>
      </Head>
      <div className="overflow-x-hidden flex flex-col smo:flex-row items-center text-xl font-weight-700 bg-liturgischekleur p-[15px] z-[5000]">
        <img src="/icon-dark.svg" width="50px" className="mr-[10px] inline"/><span id="title">{props.title} @ St.-Franciscusparochie</span>
        <form method="get" className="smo:absolute smo:right-[50px] text-sm clear-both" action="https://www.google.com/search">
          <input name="q" className="p-[5px] h-[30px] bg-vijfdekleur border-2 border-basiskleur rounded-l-xl clear-left placeholder-basiskleur" placeholder="Zoeken"/>
          <input name="q" value="site:www.stfranciscus-heverlee.org" type="hidden"/>
          <button type="submit" className="leading-[30px] h-[30px] border-2 smo:w-[40px] clear-right absolute smo:right-[-38px] border-basiskleur rounded-r-xl"><span className="material-symbols-outlined">search</span></button>
        </form>
      </div>
      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center bg-vierdekleur text-basiskleur w-full lex-1 mr-2 p-[15px] sticky top-0 z-[5000]`}>
      <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/" className="no-underline">Start</a></button>
      <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1} className="no-underline">Vieringen</a></button>
      <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2} className="no-underline">Organisatie</a></button>
      <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3} className="no-underline">Multimedia</a></button>
      <button className="hidden mo:block text-center  ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4} className="no-underline">Levensmomenten</a></button>
      <button className="hidden mo:block text-center  ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts" className="no-underline">Nieuws</a></button>
      <button className="hidden mo:block text-center  ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven" className="no-underline">Parochieblad</a></button>
      <button className="hidden mo:block text-center  ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact" className="no-underline">Contact</a></button>
      <button className="hidden mo:block text-center  ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/links" className="no-underline">Links</a></button>
      <button className="block mo:hidden text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-5/6"><a onClick={menuExpand} className="no-underline">&#9776; Menu</a></button>
      </div>
      <div style={{display: popup1?"block":"none"}} className="overflow-x-hidden flex text-center items-center content-center place-content-center bg-derdekleur text-basiskleur w-full border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[2px] sticky top-[72px] z-[4999] hidden mo:block">
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/liturgie" className="no-underline">Liturgie</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/dhj" className="no-underline" >Doorheen het jaar</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/familievieringen" className="no-underline">Familievieringen</a></button>
      </div>
      <div style={{display: popup2?"block":"none"}} className="overflow-x-hidden flex text-center items-center content-center place-content-center bg-derdekleur text-basiskleur w-full border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[2px] sticky top-[72px] z-[4999] hidden mo:block">
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/verenigingen" className="no-underline">Vereniginen</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/parochie" className="no-underline">Organisatie parochie</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/parochiaalcentrum" className="no-underline">Agenda parochiaal centrum</a></button>
      </div>
      <div style={{display: popup3?"block":"none"}} className="overflow-x-hidden flex text-center items-center content-center place-content-center bg-derdekleur text-basiskleur w-full border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[2x] sticky top-[72px] z-[4999] hidden mo:block">
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/fotos" className="no-underline">Fotoalbums</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/videos" className="no-underline">Videos</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/audios" className="no-underline">Audios</a></button>
      </div>
      <div style={{display: popup4?"block":"none"}} className="overflow-x-hidden flex text-center items-center content-center place-content-center bg-derdekleur text-basiskleur w-full border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[2px] sticky top-[72px] z-[4999] hidden mo:block">
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/doop" className="no-underline">Doopsel</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/eerstecommunie" className="no-underline">Eerste Communie</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vormsel" className="no-underline">Vormsel</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/huwelijk" className="no-underline">Huwelijk</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/ziekenzalving" className="no-underline">Ziekenzalving</a></button>
        <button className="hidden mo:inline-block text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/uitvaart" className="no-underline">Uitvaart</a></button>
      </div>
      <div className="fixed w-full h-full z-[5000] bg-vierdekleur text-basiskleur border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[15px] top-0 text-center overflow-y-auto" style={{display: menuExpanded?"block":"none"}}>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={menuExpand} className="no-underline">&#x2715; Sluiten</a></button>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/" className="no-underline">Start</a></button>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1} className="no-underline">Vieringen</a></button>
      <div style={{display: popup1?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/liturgie" className="no-underline">Liturgie</a></button>
        <button className="text-center  w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/dhj" className="no-underline">Doorheen het jaar</a></button>
        <button className="text-center  w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/familievieringen" className="no-underline">Familievieringen</a></button>
      </div>
      <button className="text-center w-5/6 mt-[15px] ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2} className="no-underline">Organisatie</a></button>
      <div style={{display: popup2?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vereniginen" className="no-underline">Verenigingen</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/parochie" className="no-underline">Organisatie parochie</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/parochiaalcentrum" className="no-underline">Agenda parochiaal centrum</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3} className="no-underline">Multimedia</a></button>
      <div style={{display: popup3?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/fotos" className="no-underline">Fotoalbums</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/videos" className="no-underline">Videos</a></button>
        <button className="text-center  w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/audios" className="no-underline">Audios</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4} className="no-underline">Levensmomenten</a></button>
      <div style={{display: popup4?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/doop" className="no-underline">Doopsel</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/eerstecommunie" className="no-underline">Eerste Communie</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vormsel" className="no-underline">Vormsel</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/huwelijk" className="no-underline">Huwelijk</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/ziekenzalving" className="no-underline">Ziekenzalving</a></button>
        <button className="text-center w-4/6 ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/uitvaart" className="no-underline">Uitvaart</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts" className="no-underline">Nieuws</a></button>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven" className="no-underline">Parochieblad</a></button>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact" className="no-underline">Contact</a></button>
      <button className="text-center mt-[15px] w-5/6 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/links" className="no-underline">Links</a></button>
    </div>
    <a href="/donaties" className="fixed p-[15px] w-[70px] no-underline rounded-md text-center bg-red-700 text-white bold bottom-[10px] z-[4001] left-[2.4%] inline-flex h-[50px]"><span className="w-full text-center material-symbols-outlined">volunteer_activism</span></a>    </>
  );
};
