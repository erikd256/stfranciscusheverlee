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
      <div className="flex overflow-x-hidden items-center justify-between bg-liturgischekleur border-b-4 border-basiskleur"><img src="/assets/Kerk_Logo.jpg" className={`lg:h-[250px] xl:h-[250px] md:h-[200px] sm:h-[200px] xs:h-[200px] border-r-4 border-basiskleur`}/><span className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl absolute lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] xs:left-[160px] top-[20px] font-bold">Sint Franciscusparochie</span><span className="absolute xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] top-[60px] sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold">Heverlee - Kessel-lo - Leuven</span><span className="absolute top-[100px] xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] sm:text-sm md:text-md lg:text-lg xl:text-xl"><p className="font-bold">Federatie Kesselinde</p><p>Tiensesteenweg 190, 3001 Heverlee</p><p>tel. secretariaat 016/25 04 59</p><p>franciscusheverlee@gmail.com</p></span></div>
      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center z-40 bg-vierdekleur text-basiskleur w-full border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] sticky top-0`}>
      <span className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/">Start</a></span>
      <span className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle1}>Vieringen</a></span>
      <div style={{display: popup1?"block":"none"}}>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_liturgie">Liturgie</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_dhj">Doorheen het jaar</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/vieringen_familievieringen">Familievieringen</a></span>
      </div>
      <span className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle2}>Organisatie</a></span>
      <div style={{display: popup2?"block":"none"}} className="p-2">
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_adressen">Adressen en parochiezalen</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochie">Organisatie parochie</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/organisatie_parochiaalcentrum">Agenda parochiaal centrum</a></span>
      </div>
      <span className="hidden mo:block text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle3}>Multimedia</a></span>
      <div style={{display: popup3?"block":"none"}}>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_fotos">Fotoalbums</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_videos">Videos</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/multimedia_audios">Audios</a></span>
      </div>
      <span className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a onClick={toggle4}>Levensmomenten</a></span>
      <div style={{display: popup4?"block":"none"}} className="p-2">
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 p-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_doop">Doopsel</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_eerstecommunie">Eerste Communie</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_vormsel">Vormsel</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_huwelijk">Huwelijk</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_ziekenzalving">Ziekenzalving</a></span>
        <span className="hidden mo:block text-center border border-basiskleur rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/levensmomenten_uitvaart">Uitvaart</a></span>
      </div>
      <span className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts">Weeknieuws</a></span>
      <span className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/kerkenleven">Kerk & Leven</a></span>
      <span className="hidden mo:block text-center  border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact">Contact</a></span>
      <span className="block mo:hidden text-center border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-5/6"><a>&#9776; Menu</a></span>
      </div>
    </>
  );
};
