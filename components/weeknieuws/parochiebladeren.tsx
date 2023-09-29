import React from "react";

import Head from 'next/head';
import format from "date-fns/format";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import formatISO from "date-fns/formatISO"
export const Parochiebladeren = ({ data }) => {
  const [filesrc, setFilesrc] = React.useState("");
  const [iframeHidden, setIframeHidden] = React.useState(true);
  const localizer = momentLocalizer(moment) // or globalizeLocalizer
  const eventsList = [];
  data.map((postData) => {
    const post = postData.node;
    const Event = {
      title: "Week: " + moment(moment.utc(post._values.date)).week(),
      start: moment.utc(post._values.date),
      end: moment.utc(post._values.date),
      allDay: true,
      resource: post._values.bestand,
    }
    eventsList.push(Event)
  })
  const handleSelectEvent= React.useCallback(
    (event) => setFrame(event.resource), []
   )
   const setFrame = (fileSrc) => {
    setIframeHidden(false)
    setFilesrc(fileSrc)
    }
  const closeIFrame = () => setIframeHidden(true)
  return (
    <>
    <div className="h-[600px]">
  <Calendar
    defaultDate={moment.now()}
    localizer={localizer}
    showMultiDayTimes
    step={60}
    events={eventsList}
    onSelectEvent={handleSelectEvent}
  /></div>
      <div className="">
        <iframe className={`fixed h-full w-full bg-basiskleur z-[90] top-0 left-0 border-0 z-[9000] ${iframeHidden ? "hidden":"block" }`} src={`${filesrc}`}/>
        <button className={`fixed rounded-md border-1 border-basiskleur p-[5px] top-[75px] left-[15px] bg-liturgischekleur ${iframeHidden ? "hidden":"block" } z-[9999]`} onClick={closeIFrame}>Sluiten</button>
      </div>
      <Head>
        <title>Nieuws @ Sint-Franciscusparochie Heverlee</title>
        <meta name="keywords" content="nieuws,parochienieuws"/>
        <meta name="description" content="Het nieuws uit onze parochie, in een handig overzicht."/>
      </Head>
    </>
  );
};
