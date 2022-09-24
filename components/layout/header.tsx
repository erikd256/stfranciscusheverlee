import React from "react";

export const Header = ({ data }) => {
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
  }
  function toggle2(){
    setPopup2(!popup2);
  }
  function toggle3(){
    setPopup3(!popup3);
  }
  function toggle4(){
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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="flex overflow-x-hidden items-center justify-between bg-liturgischekleur border-b-4 border-basiskleur z-[5000]">
        <img src="/assets/Kerk_Logo.jpg" className={`lg:h-[250px] xl:h-[250px] md:h-[200px] sm:h-[200px] xs:h-[200px] xs:border-r-4 border-basiskleur`}/>
        <span className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl absolute lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] xs:left-[160px] top-[20px] hidden font-bold xs:block">Sint Franciscusparochie</span>
        <span className="absolute xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] top-[60px] sm:text-md md:text-lg lg:text-xl xl:text-2xl hidden font-bold xs:block">Heverlee - Kessel-lo - Leuven</span>
        <span className="absolute top-[100px] xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] sm:text-sm md:text-md lg:text-lg xl:text-xl hidden xs:block">
          <p className="font-bold">Federatie Kesselinde</p><p>Tiensesteenweg 190, 3001 Heverlee</p>
          <p>tel. secretariaat +32 492 31 92 15</p>
          <p>franciscusheverlee@gmail.com</p>
        </span>
      </div>
      <div className="block xs:hidden overflow-x-hidden min-h-[100px] py-[20px] text-center bg-liturgischekleur w-full sticky">
        <span className="font-bold text-xl">Sint Franciscusparochie</span><br></br>
        <span className="font-bold text-sm">Heverlee - Kessel-lo - Leuven</span><br></br>
        <span className="">
          <hr className="my-[15px] border-basiskleur bg-basiskleur"></hr>
          <p className="font-bold">Federatie Kesselinde</p><p>Tiensesteenweg 190, 3001 Heverlee</p>
          <p>tel. secretariaat +32 492 31 92 15</p>
          <p>franciscusheverlee@gmail.com</p>
        </span>
      </div>
      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center z-[5000] bg-vierdekleur text-basiskleur w-full border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] sticky top-0`}>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/" className="no-underline">Start</a></button>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1} className="no-underline">Vieringen</a></button>
      <div style={{display: popup1?"block":"none"}}>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_liturgie" className="no-underline">Liturgie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_dhj" className="no-underline" >Doorheen het jaar</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_familievieringen" className="no-underline">Familievieringen</a></button>
      </div>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2} className="no-underline">Organisatie</a></button>
      <div style={{display: popup2?"block":"none"}} className="p-2">
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_verenigingen" className="no-underline">Vereniginen</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochie" className="no-underline">Organisatie parochie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochiaalcentrum" className="no-underline">Agenda parochiaal centrum</a></button>
      </div>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3} className="no-underline">Multimedia</a></button>
      <div style={{display: popup3?"block":"none"}}>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_fotos" className="no-underline">Fotoalbums</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_videos" className="no-underline">Videos</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_audios" className="no-underline">Audios</a></button>
      </div>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4} className="no-underline">Levensmomenten</a></button>
      <div style={{display: popup4?"block":"none"}} className="p-2">
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_doop" className="no-underline">Doopsel</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_eerstecommunie" className="no-underline">Eerste Communie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_vormsel" className="no-underline">Vormsel</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_huwelijk" className="no-underline">Huwelijk</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_ziekenzalving" className="no-underline">Ziekenzalving</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_uitvaart" className="no-underline">Uitvaart</a></button>
      </div>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts" className="no-underline">Weeknieuws</a></button>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven" className="no-underline">Kerk &amp; Leven</a></button>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact" className="no-underline">Contact</a></button>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/links" className="no-underline">Links</a></button>
      <button className="block mo:hidden text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-5/6"><a onClick={menuExpand} className="no-underline">&#9776; Menu</a></button>
      </div>
      <div className="fixed w-full h-full z-50 bg-vierdekleur text-basiskleur border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] top-0 text-center overflow-y-auto" style={{display: menuExpanded?"block":"none"}}>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={menuExpand} className="no-underline">&#x2715; Sluiten</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/" className="no-underline">Start</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1} className="no-underline">Vieringen</a></button>
      <div style={{display: popup1?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_liturgie" className="no-underline">Liturgie</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_dhj" className="no-underline">Doorheen het jaar</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_familievieringen" className="no-underline">Familievieringen</a></button>
      </div>
      <button className="text-center w-5/6 mt-[15px] border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2} className="no-underline">Organisatie</a></button>
      <div style={{display: popup2?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_vereniginen" className="no-underline">Verenigingen</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochie" className="no-underline">Organisatie parochie</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochiaalcentrum" className="no-underline">Agenda parochiaal centrum</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3} className="no-underline">Multimedia</a></button>
      <div style={{display: popup3?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_fotos" className="no-underline">Fotoalbums</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_videos" className="no-underline">Videos</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_audios" className="no-underline">Audios</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4} className="no-underline">Levensmomenten</a></button>
      <div style={{display: popup4?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_doop" className="no-underline">Doopsel</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_eerstecommunie" className="no-underline">Eerste Communie</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_vormsel" className="no-underline">Vormsel</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_huwelijk" className="no-underline">Huwelijk</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_ziekenzalving" className="no-underline">Ziekenzalving</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_uitvaart" className="no-underline">Uitvaart</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts" className="no-underline">Weeknieuws</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven" className="no-underline">Kerk &amp; Leven</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact" className="no-underline">Contact</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/links" className="no-underline">Links</a></button>
    </div>
    <a href="/donaties" className="fixed p-[15px] w-[70px] no-underline rounded-md text-center bg-red-700 text-white bold bottom-[10px] z-[4001] left-[2.4%] inline-flex h-[50px]"><span className="w-full text-center material-symbols-outlined">volunteer_activism</span></a>    </>
  );
};
