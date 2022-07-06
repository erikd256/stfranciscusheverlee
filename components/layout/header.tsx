import React from "react";

export const Header = ({ data }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

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
      <div className="flex overflow-x-hidden items-center justify-between bg-liturgischekleur border-b-4 border-basiskleur"><img src="/assets/Kerk_Logo.jpg" className={`lg:h-[250px] xl:h-[250px] md:h-[200px] sm:h-[200px] xs:h-[200px] border-r-4 border-basiskleur`}/><span className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl absolute lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] xs:left-[160px] top-[20px]">Sint Franciscusparochie</span><span className="absolute xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] top-[60px] sm:text-md md:text-lg lg:text-xl xl:text-2xl">Heverlee - Kessel-lo - Leuven</span><span className="absolute top-[100px] xs:left-[160px] lg:left-[200px] xl:left-[200px] md:left-[160px] sm:left-[160px] sm:text-sm md:text-md lg:text-lg xl:text-xl"><p>Federatie Kesselinde</p><p>Tiensesteenweg 190, 3001 Heverlee</p><p>tel. 016/25 04 59</p><p>franciscusheverlee@gmail.com</p></span></div>
      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center z-40 bg-vierdekleur text-basiskleur w-full border-solid border-b-4 border-basiskleur flex-1 mr-2 p-[15px] sticky top-0`}>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/">Start</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="#">Vieringen</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="#">Organisatie</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="#">Multimedia</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="#">Catechese</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/posts">Weeknieuws</a></span>
      <span className="text-center block border border-basiskleur rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/contact">Contact</a></span>
      </div>
    </>
  );
};
