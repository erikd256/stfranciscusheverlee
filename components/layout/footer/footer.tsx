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
          <p>&copy; <a href="https://github.com/erikd256" target="_blank">erikd256</a> - {(new Date().getFullYear())}</p>
          <span>
            <a className="mx-[0px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://www.facebook.com/pg/Franciscusgemeenschapheverlee"><FaFacebookF className={`${socialIconClasses}` }/></a>  
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://www.youtube.com/channel/UC-7wzVLv2W3oUQtQcPpvCig"><FaYoutube className={`${socialIconClasses}` }/></a>
            <a className="mx-[4px] inline-block opacity-80 hover:opacity-100 transition ease-out duration-150" target="_blank" href="https://github.com/erikd256/stfranciscusheverlee"><FaGithub className={`${socialIconClasses}` }/></a>
          </span>
          <p>
            <a href="/privacy">Privacy</a>
            <br></br>
            <a href="/contact">Contact</a>
            <br></br>
            <a href="/sitemap">Sitemap</a>
            <br></br>
            <a href="https://status.stfranciscus-heverlee.org/">Status</a>
          </p>
        </div>
      </Container>
    </footer>
    </>
  );
};
