import React from "react";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { Container } from "../../util/container";


export const Footer = ({ data, icon, rawData }) => {
  const socialIconClasses = "h-7 w-auto";
  return (
    <>
    <footer className={`bg-basiskleur pb-[75px]`}>
      <Container className="relative" size="small">
        <div className="grid w-full text-liturgischekleur gap-6 grid-cols-1 place-items-center">
          <img src="/icon.svg" width="50px"/>
          <p>&copy; 2022 - {(new Date().getFullYear())} <a href="https://github.com/erikd256" target="_blank">erikd256</a></p>
          <span>
            <a className="mx-[0px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://www.facebook.com/Franciscusgemeenschapheverlee"><FaFacebookF className={`${socialIconClasses}` }/></a>  
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://www.youtube.com/channel/UC-7wzVLv2W3oUQtQcPpvCig"><FaYoutube className={`${socialIconClasses}` }/></a>
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://github.com/erikd256/stfranciscusheverlee"><FaGithub className={`${socialIconClasses}` }/></a>
          </span>
          <p>
            <a href="/contact" className="no-underline">Contact</a>
            <br></br>
            <a href="/donaties" className="no-underline">Donaties</a>
            <br></br>
            <a href="/privacy" className="no-underline">Privacy</a>
            <br></br>
            <a href="/about" className="no-underline">Over ons</a>
            <br></br>
            <a href="/sitemap" className="no-underline">Sitemap</a>
            <br></br>
            <a href="https://status.stfranciscus-heverlee.org/" className="no-underline">Status</a>
            <br></br>
          </p>
          <img src="https://vercelbadge.vercel.app/api/erikd256/stfranciscusheverlee"/>
        </div>
        <div className="grid mo:left-[50px] mo:absolute mo:top-[150px] mo:w-1/4 w-full mo:mt-[0px] mt-[50px] text-sm text-liturgischekleur grid-cols-1 place-items-left text-center">
        <span className="text-md">Sint Franciscusparochie</span><br></br>
        <span className="text-xs">Heverlee - Kessel-lo - Leuven<br></br>Federatie Kesselinde<br></br></span>
        <hr className="border-liturgischekleur my-[10px]"></hr>
        Tiensesteenweg 190, 3001 Heverlee<br></br>
        tel. secretariaat +32 492 31 92 15<br></br>
        franciscusheverlee@gmail.com
        </div>
        <div className="grid mo:right-[50px] mo:absolute mo:top-[150px] mo:w-1/4 w-full mo:mt-[0px] mt-[50px] text-sm text-liturgischekleur grid-cols-1 place-items-left text-center hidden mo:block">
        <div className="bg-liturgischekleur w-full text-basiskleur py-[4px] rounded-t-xl">
          Meest recent
        </div>
        <div className="w-full h-[200px] bg-vijfdekleur"></div>
        </div>
      </Container>
    </footer>
    </>
  );
};
