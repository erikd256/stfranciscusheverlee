import React from "react";

import Head from 'next/head';
import format from "date-fns/format";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
export const Parochiebladeren = ({ data }) => {

  const localizer = momentLocalizer(moment) // or globalizeLocalizer
  const eventsList = [];
  data.map((postData) => {
    const post = postData.node;
    const Event = {
      title: "Parochieblad (Week: " + moment().week(post.date) + ")",
      start: post.date,
      end: post.date,
      allDay: true,
      resource: post.bestand,
    }
    eventsList.push(Event)
  })
  return (
    <>
    <div className="h-[600px]">
  <Calendar
    defaultDate={moment.now()}
    localizer={localizer}
    showMultiDayTimes
    step={60}
    events={eventsList}
  /></div>
      
      <Head>
        <title>Nieuws @ Sint-Franciscusparochie Heverlee</title>
        <meta name="keywords" content="nieuws,parochienieuws"/>
        <meta name="description" content="Het nieuws uit onze parochie, in een handig overzicht."/>
      </Head>
    </>
  );
};
