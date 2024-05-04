import React from "react";

export default function FourOhFour() {
  const windowSize = React.useRef([
    window.innerWidth,
    window.innerHeight,
  ]);
  return (
  <>
    <title>Error 404</title>
    <img src={`https://picsum.photos/${windowSize.current[0]}/${windowSize.current[1]}`} className="z-[-1] fixed w-full h-full"/>
    <div className="fixed w-1/2 h-1/2 border-2 border-white bg-black top-1/4 left-1/4 text-white text-center py-[20px] opacity-70 leading-[50px]">
     
      <p className="text-4xl">Deze Pagina is helaas niet meer te vinden.</p>
      <p className="text-2xl mb-[40px]">Laat ons bidden opdat ze snel terug gevonden mag worden.</p>
      <a href="/" className="border-[2px] my-[20px] font-sans no-underline border-white p-2">Ga terug naar de startpagina!</a>
      <audio controls autoPlay className="mx-auto my-[20px]">
        <source src="/error_music.mp3"></source>
      </audio>
    </div>
  </>
  );
}
