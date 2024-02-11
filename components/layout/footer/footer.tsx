import React from "react";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { Container } from "../../util/container";
import globals from "../../../content/global/index.json"

export const Footer = ({ data, rawData}) => {
  const socialIconClasses = "h-7 w-auto";
  return (
    <>
    <footer className={`bg-basiskleur pb-[75px] min-h-[500px] relative pt-[20px]`}>
        <div className="grid w-full text-liturgischekleur gap-6 grid-cols-1 place-items-center pt-[20px] mo:pt-[80px]">
          <a href="/"><img src="/icon.svg" width="75px" alt="icon-footer"/></a>
          <div className="w-full mo:w-1/3 mo: text-center place-content-center mo:absolute mo:top-[100px] mo:right-[0px]">
          
            <a className="mx-[0px] mt-[30px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" aria-label="Facebook" target="_blank" href="https://www.facebook.com/Franciscusgemeenschapheverlee"><FaFacebookF className={`${socialIconClasses}` }/></a>  
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" aria-label="YouTube" target="_blank" href="https://www.youtube.com/channel/UC-7wzVLv2W3oUQtQcPpvCig"><FaYoutube className={`${socialIconClasses}` }/></a>
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" aria-label="github" target="_blank" href="https://github.com/erikd256/stfranciscusheverlee"><FaGithub className={`${socialIconClasses}` }/></a><br></br>
          
          <hr className="hidden mo:block border-liturgischekleur my-[10px] mt-[12px]"></hr>
          <span>
            <a href="/dhj" className="no-underline">Vieringen</a>
            <br></br>
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
            </span>
          </div>
        </div>
        <div className="grid mo:left-[0px] mo:absolute mo:top-[100px] mo:w-1/3 w-full mo:mt-[0px] mt-[50px] text-sm text-liturgischekleur grid-cols-1 place-items-left text-center">
        <span className="text-md">Sint Franciscusparochie</span><br></br>
        <span className="text-xs">Heverlee - Kessel-lo - Leuven<br></br>Federatie Kesselinde<br></br></span>
        <hr className="border-liturgischekleur my-[10px]"></hr>
        Tiensesteenweg 190, 3001 Heverlee<br></br>
        tel. secretariaat +32 492 31 92 15<br></br>
        franciscusheverlee@gmail.com
        </div>
        <div className="overflow-auto p-4 text-liturgischekleur w-5/6 mx-auto mt-[150px]">
          <span className="absolute">Met dank aan onze sponsors:</span><br></br>
          <object type="image/svg+xml" data={`https://opencollective.com/${globals.collectivename}/tiers/backers.svg`}></object>
        </div>
        <hr className="border-liturgischekleur my-[10px]"></hr>
        <div className="overflow-auto text-center text-liturgischekleur w-5/6 m-auto mt-[20px]">
          <p className="mo:left-[20%] mo:absolute">&copy; 2022 - {(new Date().getFullYear())} <a href="https://github.com/erikd256" target="_blank">erikd256</a></p>
          <a href="https://github.com/erikd256/stfranciscusheverlee/commits/main" target="_blank"><img className="mx-auto mt-2 mo:right-[20%] mo:absolute" src="https://img.shields.io/github/last-commit/erikd256/stfranciscusheverlee?style=social&logo=vercel&label=Laatste%20wijziging"/></a>
        </div>
    </footer>
    </>
  );
};