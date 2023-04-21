import Head from "next/head";
import React from "react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios"
import Fuse from 'fuse.js'
import Link from "next/link";
import { CloseIcon } from "tinacms";
import Image from "next/image";
import { GlobalStyles } from "@mui/material";
import globals from "../../content/global/index.json"
import { TinaMarkdown } from "tinacms/dist/rich-text";


export const Header = ({ data, props }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";
  const [resultsPopUp, setResultsPopup] = React.useState(false);
  const [menuExpanded, setMenuExpanded] = React.useState(false);
  const query = React.useRef(null);
  const [searchResults, setSearchResults] = React.useState([]);
  
  React.useEffect(() => {
    document.getElementById("title").innerText = document.title;
  });
  function search(){
    const options = {
      includeScore: true,
      useExtendedSearch: true,
      keys: ['title','keywords','filename','author','excerpt','date']
    }
    axios.get("/api/search/index.json").then((res)=>{
        const fuse = new Fuse(res.data, options)
        const results = fuse.search(query.current.value)
        toggle5()
        setSearchResults(results)
      }
    )
    }
  function toggle5(){
    setResultsPopup(!resultsPopUp);
  }
  function openPopup(ref){
    if(document.getElementById(ref).style.display == "block"){
      document.getElementById(ref).style.display = "none";
    }else{
      document.getElementById(ref).style.display = "block";
    }
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
        <script defer data-domain="stfranciscus-heverlee.org" nonce="plausibleanalytics" src="https://plausible.stfranciscus-heverlee.org/js/script.js"></script>
        {props.title !== undefined && <title>{props.title} @ Sint-Franciscusparochie</title>}
        <meta name="keywords" content={props.keywords}/>
      </Head>
      <div className="overflow-x-hidden flex flex-col smo:flex-row items-center text-xl font-weight-700 bg-liturgischekleur p-[15px] z-[5000]">
        <img src="/icon-dark.svg" alt="header-icon" width="50px" className="mr-[10px] inline"/><span id="title">{props.title} @ St.-Franciscusparochie</span>
        <span className="smo:absolute smo:right-[50px] text-sm clear-both">
          <input ref={query} className="p-[5px] h-[30px] bg-vijfdekleur border-2 border-basiskleur rounded-l-xl clear-left placeholder-basiskleur" placeholder="Zoeken"/>
          <button onClick={search} className="leading-[30px] h-[30px] border-2 smo:w-[40px] clear-right absolute smo:right-[-38px] border-basiskleur rounded-r-xl" aria-label="Search"><span className="material-symbols-outlined"><SearchIcon/></span></button>
        </span>
      </div>
      <div className="bg-derdekleur w-full min-h-[50px] leading-[50px] text-center">Deze gemeenschap is lid van de pastorale zone KesseLinde. Ervaar meer <a href="https://www.kerknet.be/organisatie/pastorale-zone-kesselinde" target="_blank" aria-label="Website Pastorale Zone KesseLinde">hier</a>!</div>      <div className={`overflow-x-hidden flex text-center items-center content-center place-content-center bg-vierdekleur text-basiskleur w-full lex-1 mr-2 p-[15px] sticky top-0 z-[5000]`}>
        {globals.header.nav.map((data) => {
          if(data.type=="href"){
            return (
              <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href={data.href} className="no-underline">{data.label}</a></button>
            )
          }else{
            return (
              <button className="hidden mo:block text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur" onClick={() => openPopup(data.href)}><a className="no-underline">{data.label}</a></button>
            )
          }
        })}
        <button className="block mo:hidden text-center ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-5/6"><span onClick={menuExpand} className="no-underline">&#9776; Menu</span></button>
      </div>
      {globals.header.nav.map((data) => {
          if(data.type=="href"){
            return (
              null
            )
          }else{
            return (
              <div id={data.href} className="hidden overflow-x-hidden flex text-center items-center content-center place-content-center bg-derdekleur text-basiskleur w-full border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[2px] sticky top-[72px] z-[4999] hidden">
              {data.children.map((subnav) => {
              return (
                <button className="inline-flex text-center ring ring-basiskleur ring-2 rounded m-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><a href={subnav.href} className="no-underline">{subnav.label}</a></button>
              )
          })}</div>)}
        })}
    <div className="fixed w-full h-full z-[5000] bg-vierdekleur text-basiskleur border-solid border-b-2 border-basiskleur flex-1 mr-2 p-[15px] top-0 text-center overflow-y-auto" style={{display: menuExpanded?"block":"none"}}>
      <button className="block text-center my-[20px] mx-auto w-[95%] ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur"><span onClick={menuExpand} className="no-underline">&#x2715; Sluiten</span></button>
      <hr className="border-basiskleur border-1"></hr>
      {globals.header.nav.map((data) => {
          if(data.type=="href"){
            return (
              <button className="block my-3 text-center ring ring-basiskleur mx-auto ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-[95%]"><a href={data.href} className="no-underline">{data.label}</a></button>
            )
          }else{
            return (
              <><button className="mx-auto block text-center my-3 ring ring-basiskleur ring-2 rounded mr-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-[95%]" onClick={() => openPopup(data.href+data.type)}><a className="no-underline">{data.label}</a></button>
              <div id={data.href+data.type} className="hidden my-[20px]">
              {data.children.map((subnav) => {
                return (
                  <button className="block text-center ring my-3 ring-basiskleur ring-2 rounded mx-auto m-2 py-2 px-4 bg-liturgischekleur text-basiskleur w-[85%]"><a href={subnav.href} className="no-underline">{subnav.label}</a></button>
                )
              })}
              </div>
              </>
            )
          }})}
    </div>
    <div style={{display: resultsPopUp?"block":"none"}} className="fixed text-liturgischekleur text-center p-2 w-3/4 h-3/4 z-[6000] bg-basiskleur border-liturgischekleur overflow-auto border-2 rounded-md top-[12.5%] left-[12.5%]">
      <button className="absolute right-[20px]" onClick={toggle5}>&#10006;</button>
      <h3>Zoekresultaten:</h3><hr className="bg-liturgischekleur border-liturgischekleur"></hr><br></br>
      <div className="overflow-auto">
      {searchResults.map((data)=>{
        return(
          <div className="relative rounded-md w-3/4 left-[12.5%] bg-liturgischekleur text-basiskleur text-xl my-[10px] p-[5px]">{data.item.title}<hr className="bg-basiskleur border-basiskleur"></hr><div className="w-full p-[5px] relative h-auto text-lg text-left">{data.item.excerpt}<br></br><a className="text-sm mt-[20px]" href={data.item.filename}>Lees meer...</a></div></div>
        )
      })}
      </div>
    </div>
    <a href="/donaties" aria-label="Doneren" className="fixed p-[15px] w-[55px] no-underline rounded-md text-center bg-red-700 text-white bold bottom-[10px] z-[4001] left-[2.4%] inline-flex h-[50px]"><VolunteerActivismIcon/></a>
    <a href="/dhj" aria-label="Vieringen" className="fixed p-[15px] w-[55px] no-underline rounded-md text-center bg-green-700 text-white bold bottom-[10px] z-[4001] right-[2.4%] inline-flex h-[50px]"><AccessTimeIcon/></a></>

  );
};
