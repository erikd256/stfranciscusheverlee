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
      <div className="flex overflow-x-hidden items-center justify-between bg-liturgischekleur border-b-4 border-basiskleur">
        <img src="/assets/Kerk_Logo.jpg" className={`lg:h-[250px] xl:h-[250px] md:h-[200px] sm:h-[200px] xs:h-[200px] border-r-4 border-basiskleur`}/>
        <span className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl absolute lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] xs:left-[160px] top-[20px] font-bold">Sint Franciscusparochie</span>
        <span className="absolute xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] top-[60px] sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold">Heverlee - Kessel-lo - Leuven</span>
        <span className="absolute top-[100px] xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] sm:text-sm md:text-md lg:text-lg xl:text-xl">
          <p className="font-bold">Federatie Kesselinde</p><p>Tiensesteenweg 190, 3001 Heverlee</p>
          <p>tel. secretariaat +32 16 25 04 59</p>
          <p>franciscusheverlee@gmail.com</p>
        </span>
      </div>
      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center z-40 bg-vierdekleur text-basiskleur w-full border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] sticky top-0`}>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/">Start</a></button>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1}>Vieringen</a></button>
      <div style={{display: popup1?"block":"none"}}>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_liturgie">Liturgie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_dhj">Doorheen het jaar</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_familievieringen">Familievieringen</a></button>
      </div>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2}>Organisatie</a></button>
      <div style={{display: popup2?"block":"none"}} className="p-2">
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_verenigingen">Vereniginen</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochie">Organisatie parochie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochiaalcentrum">Agenda parochiaal centrum</a></button>
      </div>
      <button className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3}>Multimedia</a></button>
      <div style={{display: popup3?"block":"none"}}>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_fotos">Fotoalbums</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_videos">Videos</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_audios">Audios</a></button>
      </div>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4}>Levensmomenten</a></button>
      <div style={{display: popup4?"block":"none"}} className="p-2">
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_doop">Doopsel</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_eerstecommunie">Eerste Communie</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_vormsel">Vormsel</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_huwelijk">Huwelijk</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_ziekenzalving">Ziekenzalving</a></button>
        <button className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_uitvaart">Uitvaart</a></button>
      </div>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts">Weeknieuws</a></button>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven">Kerk & Leven</a></button>
      <button className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact">Contact</a></button>
      <button className="block mo:hidden text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-5/6"><a onClick={menuExpand}>&#9776; Menu</a></button>
      </div>
      <div className="fixed w-full h-full z-50 bg-vierdekleur text-basiskleur border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] top-0 text-center overflow-y-auto" style={{display: menuExpanded?"block":"none"}}>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={menuExpand}>&#x2715; Sluiten</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/">Start</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1}>Vieringen</a></button>
      <div style={{display: popup1?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_liturgie">Liturgie</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_dhj">Doorheen het jaar</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_familievieringen">Familievieringen</a></button>
      </div>
      <button className="text-center w-5/6 mt-[15px] border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2}>Organisatie</a></button>
      <div style={{display: popup2?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_vereniginen">Verenigingen</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochie">Organisatie parochie</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochiaalcentrum">Agenda parochiaal centrum</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3}>Multimedia</a></button>
      <div style={{display: popup3?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_fotos">Fotoalbums</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_videos">Videos</a></button>
        <button className="text-center  w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_audios">Audios</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4}>Levensmomenten</a></button>
      <div style={{display: popup4?"block":"none"}} className="text-center p-2 w-full">
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_doop">Doopsel</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_eerstecommunie">Eerste Communie</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_vormsel">Vormsel</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_huwelijk">Huwelijk</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_ziekenzalving">Ziekenzalving</a></button>
        <button className="text-center w-4/6 border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_uitvaart">Uitvaart</a></button>
      </div>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts">Weeknieuws</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven">Kerk & Leven</a></button>
      <button className="text-center mt-[15px] w-5/6 border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact">Contact</a></button>
    </div>
    <a href="/donaties" className="fixed p-[15px] w-[65px] rounded-t-full rounded-br-full text-center bg-red-700 text-white bold bottom-0 z-[4000] left-0 inline-flex h-[50px]"><span className="w-full text-center material-symbols-outlined">volunteer_activism</span></a>
    </>
  );
};
